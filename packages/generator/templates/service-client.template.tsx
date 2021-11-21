import "babel-plugin-tsxt";
import { ClientsFilesGeneratorContext, ServiceClient } from "../src/ClientsFilesGenerator";
import HeaderTempl from "./header.template";
import ImportsTempl from "./imports.template";

export default (ctx: ClientsFilesGeneratorContext) => (
  <templ>
    <HeaderTempl packageName={ctx.wrapper.file.package} fileName={ctx.wrapper.fileName}/>
    <ln/>
    <ImportsTempl imports={ctx.imports}>
      <templ>
        {`import * as grpcWeb from "grpc-web"`}
        {`import * as jspb from "google-protobuf"`}
      </templ>
    </ImportsTempl>
    <ln/>
    <ClientsTempl clients={ctx.clients}/>
  </templ>
)

const ClientsTempl = ({ clients }: { clients: ServiceClient[] }) => (
  <templ>
    {clients.map(client => (
      <templ>
        <ClientInterfaceTempl client={client}/>
        <ln/>
        <ClientClassTempl client={client}/>
        <ln/>
      </templ>
    ))}
  </templ>
)

const ClientInterfaceTempl = ({ client }: { client: ServiceClient }) => (
  <templ>
    {`export interface ${client.interfaceClassName} {`}
    <indent>
      {client.methods.map(client => (
        client.isServerStreaming ? (
          <templ>
            {`${client.methodName}: (request: ${client.inputType}, metadata: grpcWeb.Metadata) => grpcWeb.ClientReadableStream<${client.outputType}>;`}
          </templ>
        ) : (
          <templ>
            {`${client.methodName}: (request: ${client.inputType}, metadata: grpcWeb.Metadata) => Promise<${client.outputType}>;`}
          </templ>
        )
      )).join("")}
    </indent>
    {`}`}
  </templ>
)

const ClientClassTempl = ({ client }: { client: ServiceClient }) => (
  <templ>
    {`export class ${client.clientClassName} extends ${client.interfaceClassName} {`}
    <indent>
      {client.methods.map(client => (
        <templ>
          {`public ${client.methodName}(request: ${client.inputType}, metadata: grpcWeb.Metadata) {`}
          <indent>
            {client.isServerStreaming ? (
              <templ>
                {`retrun void;`}
              </templ>
            ) : (
              <templ>
                {`retrun void;`}
              </templ>
            )}
          </indent>
          {`}`}
        </templ>
      )).join("")}
    </indent>
    {`}`}
  </templ>
)
