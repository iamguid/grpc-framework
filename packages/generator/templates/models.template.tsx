import {
  Enum,
  Message,
  ModelsFilesGeneratorContext,
} from "../src/ModelsFilesGenerator";
import HeaderTempl from "./header.template";
import ImportsTempl from "./imports.template";

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
                {`${field.fieldName}: ${field.fieldType};`}
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

const MessageModelTempl = ({ message }: { message: Message }) => (
  <templ>
    {`export class ${message.modelName} implements ${message.ifaceName} extends jspb.Message {`}
    <indent>
      {message.fields.map((field) => (
        <templ>
          {field.isMap ? (
            <templ>
              {`public get ${field.fieldName}(): Record<${field.mapType.keyType}, ${field.mapType.valueType}> {`}
              <indent>{`return void;`}</indent>
              {`}`}
              <ln />
              {`public set ${field.fieldName}(value: Record<${field.mapType.keyType}, ${field.mapType.valueType}>): void {`}
              <indent>{`return void;`}</indent>
              {`}`}
            </templ>
          ) : (
            <templ>
              {`public get ${field.fieldName}(): ${field.fieldType} {`}
              <indent>{`return void;`}</indent>
              {`}`}
              <ln />
              {`public set ${field.fieldName}(value: ${field.fieldType}): void {`}
              <indent>{`return void;`}</indent>
              {`}`}
            </templ>
          )}
        </templ>
      )).join("")}
    </indent>
    {`}`}
  </templ>
);

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
