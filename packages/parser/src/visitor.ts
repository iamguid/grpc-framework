import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ProtoContext, ImportStatementContext, Protobuf3Parser, ServiceDefContext, RpcContext, MessageDefContext, MessageElementContext, FieldContext, MapFieldContext, OneofFieldContext, EnumDefContext, EnumFieldContext } from "./generated/Protobuf3Parser";
import { Protobuf3Visitor } from "./generated/Protobuf3Visitor";
import { EnumDescriptor } from "./reflection/EnumDescriptor";
import { EnumFieldDescriptor } from "./reflection/EnumFieldDescriptor";
import { FieldDescriptor, MapField } from "./reflection/FieldDescriptor";
import { FileDescriptor, FileImport } from "./reflection/FileDescriptor";
import { IDescriptor } from "./reflection/IDescriptor";
import { MessageDescriptor } from "./reflection/MessageDescriptor";
import { MethodDescriptor } from "./reflection/MethodDescriptor";
import { ServiceDescriptor } from "./reflection/ServiceDescriptor";
import { extractOptions, normalizeTypeName, trimChar } from "./utils";

export class Visitor extends AbstractParseTreeVisitor<IDescriptor> implements Protobuf3Visitor<IDescriptor> {
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

        const options = ctx.serviceElement()
            .filter(serviceElement => Boolean(serviceElement.optionStatement()))
            .map(serviceElement => extractOptions(serviceElement.optionStatement()!));

        return new ServiceDescriptor({
            index,
            name: serviceName,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options,
            methods
        });
    }

    visitRpc(ctx: RpcContext, index = 0): MethodDescriptor {
        const options = ctx.optionStatement()
            .map(optionStatement => extractOptions(optionStatement));

        return new MethodDescriptor({
            index,
            name: ctx.rpcName().text,
            namespace: this.namespace.join('.'),
            fileDescriptor: this.fileDescriptor,
            options,
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
        const namespace = this.namespace.join('.');
        const fieldName = ctx.fieldName().text;
        const filedType = normalizeTypeName(ctx.type_().text, this.fileDescriptor.registry, namespace);
        const fieldNumber = Number.parseInt(ctx.fieldNumber().text, 10);
        const isRepeated = Boolean(ctx.REPEATED()?.text);

        const options = ctx.fieldOptions()?.fieldOption()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace,
            fileDescriptor: this.fileDescriptor,
            options: options || [],
            type: filedType,
            repeated: isRepeated,
            fieldNumber 
        });
    }

    visitMapField(ctx: MapFieldContext, index = 0): FieldDescriptor {
        const namespace = this.namespace.join('.');
        const fieldName = ctx.mapName().text;
        const fieldNumber = Number.parseInt(ctx.fieldNumber().text, 10);
        const keyType = normalizeTypeName(ctx.keyType().text, this.fileDescriptor.registry, namespace);
        const valueType = normalizeTypeName(ctx.type_().text, this.fileDescriptor.registry, namespace);
        const mapField: MapField = { keyType, valueType }

        const options = ctx.fieldOptions()?.fieldOption()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace,
            fileDescriptor: this.fileDescriptor,
            options: options || [],
            type: "",
            repeated: false,
            fieldNumber,
            map: mapField
        });
    }

    visitOneofField(ctx: OneofFieldContext, index = 0, oneofName = ''): FieldDescriptor {
        const namespace = this.namespace.join('.');
        const fieldName = ctx.fieldName().text;
        const filedType = normalizeTypeName(ctx.type_().text, this.fileDescriptor.registry, namespace);
        const fieldNumber = Number.parseInt(ctx.fieldNumber().text, 10);

        const options = ctx.fieldOptions()?.fieldOption()
            .map(fieldOption => extractOptions(fieldOption));

        return new FieldDescriptor({
            index,
            name: fieldName,
            namespace,
            fileDescriptor: this.fileDescriptor,
            oneofName,
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
}