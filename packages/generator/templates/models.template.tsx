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

const getOneofGroupsArray = (message: Message): number[][] => {
  const groupedOnofFieldsByOneofName = message.fields
    .filter(field => field.isOneof)
    .reduce((accum, field) => {
      if (!accum[field.oneofName!]) {
        accum[field.oneofName!] = []
      }

      accum[field.oneofName!].push(field.fieldNumber)
      return accum;
    }, {} as Record<string, number[]>);

    return Object.entries(groupedOnofFieldsByOneofName)
      .map(([key, value]) => {
        return [...value]
      });
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
    )).join("")}
    <ln />
    {enums.map((enm) => (
      <templ>
        <EnumTempl enm={enm} />
      </templ>
    )).join("")}
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
      }).join("")}
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

const MessageModelTempl = ({ message }: { message: Message }) => {
  const repeatedFieldsArray = getRepeatedFieldsArray(message);
  const oneofGroupsArray = getOneofGroupsArray(message);

  return (
    <templ>
      {`export class ${message.modelName} implements ${message.ifaceName} extends jspb.Message {`}
      <indent>
        {`private static repeatedFields: number[] = [${repeatedFieldsArray.join(', ')}];`}
        {`private static oneofFieldsGroups: number[] = ${renderOneofGroupsArray(oneofGroupsArray)};`}
        <ln/>
        {`contructor(opt_data: any) {`}
        <indent>
          {`jspb.Message.initialize(`}
          <indent>
            {`this,`}
            {`opt_data,`}
            {`0,`}
            {`${message.pivot},`}
            {repeatedFieldsArray.length > 0 ? `${message.modelName}.repeatedFields,` : `null,`}
            {oneofGroupsArray.length > 0 ? `${message.modelName}.oneofFieldsGroups,` : `null,`}
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
                    {`return jspb.Message.getMapField(this, ${field.fieldNumber}, false, null));`}
                  </indent>
                  {`}`}
                  <ln />
                </templ>
              )
            }

            case field.isOneof: {
              return (
                <templ>
                  {`public get ${field.fieldName}(): ${field.fieldType} {`}
                  <indent>{`return void;`}</indent>
                  {`}`}
                  <ln />
                  {`public set ${field.fieldName}(value: ${field.fieldType}): void {`}
                  <indent>{`return void;`}</indent>
                  {`}`}
                </templ>
              )
            }

            default: {
              return (
                <templ>
                  {`public get ${field.fieldName}(): ${field.fieldType} {`}
                  <indent>{`return void;`}</indent>
                  {`}`}
                  <ln />
                  {`public set ${field.fieldName}(value: ${field.fieldType}): void {`}
                  <indent>{`return void;`}</indent>
                  {`}`}
                </templ>
              )
            }
          }
        }).join("")}
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
      )).join("")}
    </indent>
    {`}`}
  </templ>
);
