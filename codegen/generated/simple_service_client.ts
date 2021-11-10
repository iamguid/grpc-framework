// GENERATED CODE -- DO NOT EDIT!

import * as grpcWeb from "grpc-web";
import * as Request from "./Request.ts";
import * as Response from "./Response.ts";

export interface ISimpleServiceClient {
    getSomeValue: (request: Request.Request, metadata: grpcWeb.Metadata) => Promise<Response.Response>
}

export class SimpleServiceClient implements ISimpleServiceClient {
    public getSomeValue(request: Request.Request, metadata: grpcWeb.Metadata): Promise<Response.Response> {
        return void;
    }
}
