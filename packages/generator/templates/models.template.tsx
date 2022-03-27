import {
  Enum,
  Message,
  MessageField,
  ModelsFilesGeneratorContext,
} from "../src/ModelsFilesGenerator";
import HeaderTempl from "./header.template";
import ImportsTempl from "./imports.template";

const getRepeatedFieldsArray = (message: Message): number[] => {
  return message.fields.filter(field => field.isRepeated).map(field => field.fieldNumber);
}

const getOneofGroups = (message: Message): {name: string; fields: number[]}[] => {
  return message.fields
    .filter(field => field.isOneof)
    .reduce((accum, field) => {
      if (accum.findIndex(group => group.name === field.oneofName) === -1) {
        accum.push({name: field.oneofName, fields: []})
      }
      const currentGroup = accum.find(group => group.name === field.oneofName)
      currentGroup.fields.push(field.fieldNumber);
      return accum;
    }, [] as {name: string; fields: number[]}[]);
}

const getOneofGroupsArray = (message: Message): number[][] => {
  return getOneofGroups(message)
    .map(groups => {
      return [...groups.fields]
    });
}

const getOneofGroupsArrayIndex = (message: Message, oneofName: string): number => {
  return getOneofGroups(message)
    .findIndex(group => group.name === oneofName)
}

const fieldDefault = (field: MessageField) => {
  if (field.isRepeated) {
    return "[]";
  }
  
  if (field.isMessageType) {
    return "null";
  }

  switch (field.fieldRawType) {
    case "int32":
    case "uint32":
    case "float":
    case "double":
      return "0";
    case "int64":
    case "uint64":
      return "0n"
    case "bool":
      return "false";
    case "string":
      return "\"\"";
    case "bytes":
      return "new Uint8Array()"
  }

  throw new Error(`Cannot get default JS type ${field.fieldRawType}`)
}

export default (ctx: ModelsFilesGeneratorContext) => (
  <templ>
    <HeaderTempl
      packageName={ctx.wrapper.file.package}
      fileName={ctx.wrapper.fileName}
    />
    <ln />
    <ImportsTempl imports={ctx.imports}>
      <templ>{`import * as jspb from "google-protobuf"`}</templ>
    </ImportsTempl>
    <ln />
    <MessagesRecursiveTempl messages={ctx.messges} enums={ctx.enums} />
  </templ>
);

const MessagesRecursiveTempl = ({
  messages,
  enums,
}: {
  messages: Message[];
  enums: Enum[];
}) => (
  <templ>
    {messages.map((message) => (
      <templ>
        <MessageIfaceTempl message={message} />
        <ln />
        <MessageModelTempl message={message} />
        <ln />
        {message.mesages.length > 0 || message.enums.length > 0 ? (
            <templ>
              {`export namespace ${message.modelName} {`}
              <indent>
                <MessagesRecursiveTempl
                  messages={message.mesages}
                  enums={message.enums}
                />
              </indent>
              {`}`}
            </templ>
          ) : (
            <templ/>
          )}
      </templ>
    ))}
    <ln />
    {enums.map((enm) => (
      <templ>
        <EnumTempl enm={enm} />
      </templ>
    ))}
    <ln />
  </templ>
);

const MessageIfaceTempl = ({ message }: { message: Message }) => (
  <templ>
    {`export interface ${message.ifaceName} {`}
    <indent>
      {message.fields.map((field) => {
        switch (true) {
          case field.isMap: {
            return (
              <templ>
                {`${field.fieldName}: Record<${field.mapType.keyType}, ${field.mapType.valueType}>;`}
              </templ>
            )
          }

          case field.isOneof: {
            return (
              <templ>
                {`${field.fieldName}?: ${field.fieldType};`}
              </templ>
            )
          }

          default: {
            return (
              <templ>
                {`${field.fieldName}: ${field.fieldType};`}
              </templ>
            )
          }
        }
      })}
    </indent>
    {`}`}
  </templ>
);

const renderOneofGroupsArray = (groups: number[][]) => {
  let result: string[] = [];

  for (const group of groups) {
    result.push(`[${group.join(', ')}]`);
  }

  return `[${result.join(', ')}]`;
}

const MessageFieldGetterBody = ({ field }: { field: MessageField }) => {
  let useDefault = true;

  // Repeated fields get initialized to their default in the constructor
  // (why?), so we emit a plain getField() call for them.
  if (field.isRepeated) {
    useDefault = false;
  }

  const isBoolean = field.fieldRawType == "bool";
  const isFloatOrDouble =
      field.fieldRawType == "float" ||
      field.fieldRawType == "double";

  const cardinality = field.isRepeated ? "Repeated" : "";
  const withDefault = useDefault ? "WithDefault" : "";
  const defaultArg = useDefault ? fieldDefault(field) : "";

  let type = "";
  if (isFloatOrDouble) {
    type = "FloatingPoint";
  }
  if (isBoolean) {
    type = "Boolean";
  }

  // Prints the appropriate function, among:
  // - getField
  // - getBooleanField
  // - getFloatingPointField => Replaced by getOptionalFloatingPointField to
  //   preserve backward compatibility.
  // - getFieldWithDefault
  // - getBooleanFieldWithDefault
  // - getFloatingPointFieldWithDefault
  // - getRepeatedField
  // - getRepeatedBooleanField
  // - getRepeatedFloatingPointField
  if (isFloatOrDouble && !field.isRepeated && !useDefault) {
    return (
      <templ>
        {`return jspb.Message.getOptionalFloatingPointField(`}
        <indent>
          {`this,`}
          {`${field.fieldNumber}`}
        </indent>
        {`)`}
      </templ>
    )
  } else {
    return (
      <templ>
        {`return jspb.Message.get${cardinality}${type}Field${withDefault}(`}
        <indent>
          {`this,`}
          {`${field.fieldNumber},`}
          {`${defaultArg}`}
        </indent>
        {`)`}
      </templ>
    )
  }
}

const MessageModelTempl = ({ message }: { message: Message }) => {
  const repeatedFieldsArray = getRepeatedFieldsArray(message);
  const oneofGroupsArray = getOneofGroupsArray(message);

  return (
    <templ>
      {`export class ${message.modelName} implements ${message.ifaceName} extends jspb.Message {`}
      <indent>
        {repeatedFieldsArray.length > 0 ? `private static repeatedFields: number[] = [${repeatedFieldsArray.join(', ')}];` : null}
        {oneofGroupsArray.length > 0 ? `private static oneofFieldsGroups: number[] = ${renderOneofGroupsArray(oneofGroupsArray)};` : null}
        <ln/>
        {`contructor(opt_data: any) {`}
        <indent>
          {`jspb.Message.initialize(`}
          <indent>
            {`this,`}
            {`opt_data,`}
            {`0,`}
            {`${message.pivot},`}
            {`${repeatedFieldsArray.length > 0 ? `${message.modelName}.repeatedFields,` : `null,`}`}
            {`${oneofGroupsArray.length > 0 ? `${message.modelName}.oneofFieldsGroups` : `null`}`}
          </indent>
          {`)`}
        </indent>
        {`}`}
        <ln/>
        {message.fields.map((field) => {
          switch (true) {
            case field.isMap: {
              return (
                <templ>
                  {`public get ${field.fieldName}(): jspb.Map<${field.mapType.keyType}, ${field.mapType.valueType}> {`}
                  <indent>
                    {`return jspb.Message.getMapField(`}
                    <indent>
                      {`this,`} 
                      {`${field.fieldNumber},`}
                      {`false,`}
                      {field.mapType.valueTypeIsMessage ? field.mapType.valueType : 'null'}
                    </indent>
                    {`);`}
                  </indent>
                  {`}`}
                  <ln />
                </templ>
              )
            }

            case field.isMessageType: {
              return (
                <templ>
                  {`public get ${field.fieldName}(): ${field.fieldType} {`}
                  <indent>
                    {`return jspb.Message.get${field.isRepeated ? 'Repeated' : ''}WrapperField(`}
                    <indent>
                      {`this,`}
                      {`${field.fieldType},`}
                      {`${field.fieldNumber}`}
                    </indent>
                    {`);`}
                  </indent>
                  {`}`}
                  <ln />
                  {`public set ${field.fieldName}(value: ${field.fieldType}): void {`}
                  <indent>
                    {`return jspb.Message.set${field.isOneof ? 'Oneof' : ''}${field.isRepeated ? 'Repeated' : ''}WrapperField(`},
                    <indent>
                      {`this,`}
                      {`${field.fieldNumber},`}
                      {field.oneofName ? `${message.modelName}.oneofFieldsGroups[${getOneofGroupsArrayIndex(message, field.oneofName)}],` : ''}
                      {`value`}
                    </indent>
                    {`)`}
                  </indent>
                  {`}`}
                </templ>
              )
            }

            default: {
              return (
                <templ>
                  {`public get ${field.fieldName}(): ${field.fieldType} {`}
                  <indent>
                    <MessageFieldGetterBody field={field}/>
                  </indent>
                  {`}`}
                  <ln />
                  {`public set ${field.fieldName}(value: ${field.fieldType}): void {`}
                  <indent>{`return void;`}</indent>
                  {`}`}
                </templ>
              )
            }
          }
        })}
      </indent>
      {`}`}
    </templ>
  )
};

const EnumTempl = ({ enm }: { enm: Enum }) => (
  <templ>
    {`export enum ${enm.name} {`}
    <indent>
      {enm.fields.map((field) => (
        <templ>{`${field.fieldName} = ${field.fieldValue},`}</templ>
      ))}
    </indent>
    {`}`}
  </templ>
);
