import * as fs from "fs";
import * as path from "path";

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { EnumDefContext, EnumFieldContext, FieldContext, ImportStatementContext, MapFieldContext, MessageDefContext, MessageElementContext, OneofContext, OneofFieldContext, Protobuf3Parser, ProtoContext, RpcContext, ServiceDefContext, ServiceElementContext } from './generated/Protobuf3Parser'
import { Protobuf3Visitor } from './generated/Protobuf3Visitor';
import { Protobuf3Lexer } from './generated/Protobuf3Lexer'
import { FileDescriptor, FileImport } from './reflection/FileDescriptor';
import { ServiceDescriptor } from './reflection/ServiceDescriptor';
import { IDescriptor } from './reflection/IDescriptor';
import { MethodDescriptor } from './reflection/MethodDescriptor';
import { MessageDescriptor } from './reflection/MessageDescriptor';
import { EnumDescriptor } from './reflection/EnumDescriptor';
import { trimChar } from './utils';
import { EnumFieldDescriptor } from "./reflection/EnumFieldDescriptor";
import { FieldDescriptor, MapField } from "./reflection/FieldDescriptor";

const filePath = path.resolve(__dirname, "../src/tests/proto/example.proto")
const content = fs.readFileSync(filePath).toString();

// Create the lexer and parser
let inputStream = CharStreams.fromString(content);

let lexer = new Protobuf3Lexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new Protobuf3Parser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.proto();

class Visitor extends AbstractParseTreeVisitor<IDescriptor> implements Protobuf3Visitor<IDescriptor> {
    public fileDescriptor: FileDescriptor;

    private namespace: string[] = [];

    constructor() {
        super();
        this.fileDescriptor = new FileDescriptor()
    }

    defaultResult() {
        return this.fileDescriptor;
    }

    visitProto(ctx: ProtoContext): FileDescriptor {
        const topLevelDefs = ctx.topLevelDef();

        const packge = ctx.packageStatement()[0].fullIdent().text;
        this.fileDescriptor.package = packge;
        this.namespace.push(packge);

        ctx.importStatement().forEach(importStatement => {
            this.visitImportStatement(importStatement);
        });

        const services = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.serviceDef()))
            .map((topLevelDef, index) => this.visitServiceDef(topLevelDef.serviceDef()!, index));

        const messages = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.messageDef()))
            .map((topLevelDef, index) => this.visitMessageDef(topLevelDef.messageDef()!, index))

        const enums = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.enumDef()))
            .map((topLevelDef, index) => this.visitEnumDef(topLevelDef.enumDef()!, index))

        this.fileDescriptor.services.push(...services);
        this.fileDescriptor.messages.push(...messages);
        this.fileDescriptor.enums.push(...enums);

        return this.fileDescriptor;
    }

    visitImportStatement(ctx: ImportStatementContext): FileDescriptor {
        const importType = ctx.tryGetToken(Protobuf3Parser.WEAK, 0)?.text;
        const importPath = trimChar(ctx.strLit().text, "\"");

        let imprt: FileImport = {
            type: 'public',
            path: importPath,
        }

        switch (importType) {
            case 'weak': imprt.type = 'weak'; break;
            case 'public': imprt.type = 'public'; break;
        }

        this.fileDescriptor.imports.push(imprt);

        return this.fileDescriptor;
    }

    visitServiceDef(ctx: ServiceDefContext, index = 0): ServiceDescriptor {
        const serviceName = ctx.serviceName().text

        this.namespace.push(serviceName);
        const methods = ctx.serviceElement()
            .filter(serviceElement => Boolean(serviceElement.rpc()))
            .map((serviceElement, index) => this.visitRpc(serviceElement.rpc()!, index))
        this.namespace.pop();

        return new ServiceDescriptor({
            index,
            name: serviceName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            methods
        });
    }

    visitRpc(ctx: RpcContext, index = 0): MethodDescriptor {
        return new MethodDescriptor({
            index,
            name: ctx.rpcName().text,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            isClientStreaming: Boolean(ctx.tryGetToken(Protobuf3Parser.STREAM, 0)),
            isServerStreaming: Boolean(ctx.tryGetToken(Protobuf3Parser.STREAM, 1)),
            inputMessageType: ctx.messageType(0).text,
            outputMessageType: ctx.messageType(1).text,
        });
    }

    visitMessageDef(ctx: MessageDefContext, index = 0): MessageDescriptor {
        const messageName = ctx.messageName().text;
        this.namespace.push(messageName);

        const nestedMessages = ctx.messageBody().messageElement()
            .filter(messageElement => Boolean(messageElement.messageDef()))
            .map((messageElement, index) => this.visitMessageDef(messageElement.messageDef()!, index));

        const nestedEnums = ctx.messageBody().messageElement()
            .filter(messageElement => Boolean(messageElement.enumDef()))
            .map((messageElement, index) => this.visitEnumDef(messageElement.enumDef()!, index));

        const fields = ctx.messageBody().messageElement()
            .filter(messageElement => {
                return Boolean(messageElement.field()) 
                    || Boolean(messageElement.oneof()) 
                    || Boolean(messageElement.mapField())
            })
            .reduce((current: FieldDescriptor[], messageElement: MessageElementContext, index) => {
                if (Boolean(messageElement.field())) {
                    current.push(this.visitField(messageElement.field()!, index));
                }

                if (Boolean(messageElement.mapField())) {
                    current.push(this.visitMapField(messageElement.mapField()!, index));
                }

                if (Boolean(messageElement.oneof())) {
                    const oneof = messageElement.oneof()!;
                    const oneofName = oneof.oneofName().text;
                    const fields = oneof.oneofField();

                    fields.forEach((field, oneofIndex) => {
                        current.push(this.visitOneofField(field, index + oneofIndex, oneofName)) 
                    });
                }

                return current;
            }, [])

        this.namespace.pop();

        return new MessageDescriptor({
            index,
            name: messageName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            fields,
            messages: nestedMessages,
            enums: nestedEnums
        });
    }

    visitField(ctx: FieldContext, index = 0): FieldDescriptor {
        const fieldName = ctx.fieldName().text;
        const filedType = ctx.type_().text;
        const fieldNumber = Number.parseInt(ctx.fieldNumber().text, 10);
        const isRepeated = Boolean(ctx.REPEATED()?.text);

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            type: filedType,
            repeated: isRepeated,
            fieldNumber 
        });
    }

    visitMapField(ctx: MapFieldContext, index = 0): FieldDescriptor {
        const fieldName = ctx.mapName().text;
        const fieldNumber = Number.parseInt(ctx.fieldNumber().text, 10);
        const keyType = ctx.keyType().text;
        const valueType = ctx.type_().text;
        const mapField: MapField = { keyType, valueType }

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            type: "",
            repeated: false,
            fieldNumber,
            map: mapField
        });
    }

    visitOneofField(ctx: OneofFieldContext, index = 0, oneofName = ''): FieldDescriptor {
        const fieldName = ctx.fieldName().text;
        const filedType = ctx.type_().text;
        const fieldNumber = Number.parseInt(ctx.fieldNumber().text, 10);

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            type: filedType,
            repeated: false,
            fieldNumber 
        });
    }

    visitEnumDef(ctx: EnumDefContext, index = 0): EnumDescriptor {
        const enumName = ctx.enumName().text;

        this.namespace.push(enumName);
        const fields = ctx.enumBody().enumElement()
            .filter(enumElement => Boolean(enumElement.enumField()))
            .map((enumElement, index) => this.visitEnumField(enumElement.enumField()!, index))
        this.namespace.pop();

        return new EnumDescriptor({
            index,
            name: enumName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            fields
        });
    }

    visitEnumField(ctx: EnumFieldContext, index = 0): EnumFieldDescriptor {
        const fieldName = ctx.ident().text;
        const fieldValue = Number.parseInt(ctx.intLit().text);

        return new EnumFieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            fieldName: fieldName,
            fieldValue: fieldValue
        });
    }
}

const visitor = new Visitor();

console.log(JSON.stringify(visitor.visit(tree).toObject(), undefined, 2))