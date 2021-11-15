import * as fs from "fs";
import * as path from "path";

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ConstantContext, EnumDefContext, EnumElementContext, EnumFieldContext, EnumValueOptionContext, FieldContext, FieldOptionContext, ImportStatementContext, MapFieldContext, MessageDefContext, MessageElementContext, OneofContext, OneofFieldContext, OptionStatementContext, Protobuf3Parser, ProtoContext, RpcContext, ServiceDefContext, ServiceElementContext } from './generated/Protobuf3Parser'
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
import { Option, Options } from "./reflection/Options";

const filePath = path.resolve(__dirname, "../src/tests/proto/option.proto")
const content = fs.readFileSync(filePath).toString();

// Create the lexer and parser
let inputStream = CharStreams.fromString(content);

let lexer = new Protobuf3Lexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new Protobuf3Parser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.proto();

const extractOptionConstantValue = (ctx: ConstantContext): any => {
    let result: any = null;

    if (ctx.boolLit()) {
        result = ctx.boolLit()!.text === "true";
    }

    if (ctx.strLit()) {
        result = trimChar(ctx.strLit()!.text, "\"");
    }

    if (ctx.intLit()) {
        if (ctx.MINUS()) {
            result = -Number.parseInt(ctx.intLit()!.text);
        } else {
            result = Number.parseInt(ctx.intLit()!.text);
        }
    }

    if (ctx.floatLit()) {
        if (ctx.MINUS()) {
            result = -Number.parseFloat(ctx.floatLit()!.text);
        } else {
            result = Number.parseFloat(ctx.floatLit()!.text);
        }
    }

    if (ctx.fullIdent()) {
        result = ctx.fullIdent()!.text;
    }

    if (ctx.blockLit()) {
        result = {}

        const idents = ctx.blockLit()!.ident();
        const constants = ctx.blockLit()!.constant();

        idents.forEach((ident, index) => {
            result[ident.text] = extractOptionConstantValue(constants[index]);
        })
    }

    return result
}

const extractOptions = (ctx: OptionStatementContext | EnumValueOptionContext | FieldOptionContext): Options => {
    const options: Options = {};

    const fullIndent = ctx.optionName().fullIdent();
    let optionName = fullIndent[0].text;
        
    if (fullIndent.length === 2) {
        optionName += "." + fullIndent[1].text;
    }

    let optionValue: any = extractOptionConstantValue(ctx.constant());

    options[optionName] = optionValue;

    return options;
}

class Visitor extends AbstractParseTreeVisitor<IDescriptor | Option> implements Protobuf3Visitor<IDescriptor | Option> {
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

        const packge = ctx.packageStatement()[0]?.fullIdent()?.text || "";
        this.fileDescriptor.package = packge;
        this.namespace.push(packge);

        ctx.importStatement().forEach(importStatement => {
            this.visitImportStatement(importStatement);
        });

        const options = ctx.optionStatement()
            .map(optionStatement => extractOptions(optionStatement));

        const services = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.serviceDef()))
            .map((topLevelDef, index) => this.visitServiceDef(topLevelDef.serviceDef()!, index));

        const messages = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.messageDef()))
            .map((topLevelDef, index) => this.visitMessageDef(topLevelDef.messageDef()!, index))

        const enums = topLevelDefs
            .filter(topLevelDef => Boolean(topLevelDef.enumDef()))
            .map((topLevelDef, index) => this.visitEnumDef(topLevelDef.enumDef()!, index))

        this.fileDescriptor.options.push(...options);
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

        const options = ctx.messageBody().messageElement()
            .filter(messageElement => Boolean(messageElement.optionStatement()))
            .map(messageElement => extractOptions(messageElement.optionStatement()!))

        return new MessageDescriptor({
            index,
            name: messageName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options,
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

        const options = ctx.fieldOptions()?.fieldOption()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options: options || [],
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

        const options = ctx.fieldOptions()?.fieldOption()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options: options || [],
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

        const options = ctx.fieldOptions()?.fieldOption()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options: options || [],
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

        const options = ctx.enumBody().enumElement()
            .filter(enumElement => Boolean(enumElement.optionStatement()))
            .map(enumElement => extractOptions(enumElement.optionStatement()!))

        return new EnumDescriptor({
            index,
            name: enumName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options,
            fields
        });
    }

    visitEnumField(ctx: EnumFieldContext, index = 0): EnumFieldDescriptor {
        const fieldName = ctx.ident().text;
        const fieldValue = Number.parseInt(ctx.intLit().text);

        const options = ctx.enumValueOptions()?.enumValueOption()
            .map(enumValueOption => extractOptions(enumValueOption))

        return new EnumFieldDescriptor({
            index,
            name: fieldName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options: options || [],
            fieldName: fieldName,
            fieldValue: fieldValue
        });
    }

    // visitOptionStatement(ctx: OptionStatementContext): Option {
    //     const optionName = ctx.optionName().text;
    //     const optionValue = ctx.constant().text;

    //     return {
            
    //     }
    // }
}

const visitor = new Visitor();

console.log(JSON.stringify((visitor.visit(tree) as IDescriptor).toObject(), undefined, 2))