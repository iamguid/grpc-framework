import "babel-plugin-tsxt";
import { ClientsFilesGenerator } from "../src/ClientsFilesGenerator";
import HeaderTempl from "./header.template";
import ImportsTempl from "./imports.template";

export default (ctx: ClientsFilesGenerator.Context) => (
  <templ>
    <HeaderTempl packageName={ctx.fileDescriptor.proto.getPackage()} fileName={ctx.fileDescriptor.name}/>
    <ln/>
    <ImportsTempl imports={ctx.imports}>
      {`import * as grpcWeb from "grpc-web"`}
      {`import * jspb from "google-protobuf"`}
    </ImportsTempl>
    <ln/>
    <ClientsTempl clients={ctx.clients}/>
  </templ>
)

const ClientsTempl = ({ clients }: { clients: ClientsFilesGenerator.ServiceClient[] }) => (
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

const ClientInterfaceTempl = ({ client }: { client: ClientsFilesGenerator.ServiceClient }) => (
  <templ>
    {`export interface ${client.interfaceClassName} {`}
    <indent>
      {client.methods.map(client => (
        client.isServerStreaming ? (
          <templ>
            {`${client.methodName}}: (request: ${client.inputType}, metadata: grpcWeb.Metadata) => grpcWeb.ClientReadableStream<${client.outputType}>;`}
          </templ>
        ) : (
          <templ>
            {`${client.methodName}}: (request: ${client.inputType}, metadata: grpcWeb.Metadata) => Promise<${client.outputType}>;`}
          </templ>
        )
      )).join("")}
    </indent>
    {`}`}
  </templ>
)

const ClientClassTempl = ({ client }: { client: ClientsFilesGenerator.ServiceClient }) => (
  <templ>
    {`export class ${client.clientClassName} extends ${client.interfaceClassName} {`}
    <indent>
      {client.methods.map(client => (
        <templ>
          {`public ${client.methodName}}(request: ${client.inputType}, metadata: grpcWeb.Metadata) {`}
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
