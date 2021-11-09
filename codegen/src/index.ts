import { CodeGeneratorRequest, CodeGeneratorResponse } from 'google-protobuf/google/protobuf/compiler/plugin_pb';
import { ClientsFilesGenerator } from './generator/ClientsFilesGenerator';
import { ReflectionRegistry } from './reflection/ReflectionRegistry';
import { withAllStdIn } from './utils';

/**
 * This is the ProtoC compiler plugin.
 *
 * The Protocol Buffers Compiler can be extended to [support new languages via plugins](https://developers.google.com/protocol-buffers/docs/reference/other).
 * A plugin is just a program which reads a CodeGeneratorRequest protocol buffer from standard input
 * and then writes a CodeGeneratorResponse protocol buffer to standard output.
 * These message types are defined in [plugin.proto](https://github.com/google/protobuf/blob/master/src/google/protobuf/compiler/plugin.proto).
 *
 */
withAllStdIn((inputBuff: Buffer) => {
    try {
        const typedInputBuff = new Uint8Array(inputBuff.length);
        typedInputBuff.set(inputBuff);

        const codeGenRequest = CodeGeneratorRequest.deserializeBinary(typedInputBuff);
        const codeGenResponse = new CodeGeneratorResponse();

        const reflectionRegistry = new ReflectionRegistry();

        codeGenRequest.getProtoFileList().forEach(protoFileDescriptor => {
            reflectionRegistry.importFile(protoFileDescriptor);
        });

        console.warn(reflectionRegistry);

        const clientsGenerator = new ClientsFilesGenerator(codeGenRequest.getFileToGenerateList(), reflectionRegistry);
        clientsGenerator.generateClients();

        for (const output of clientsGenerator.generated) {
            const file = new CodeGeneratorResponse.File();
            file.setName(output.fileName);
            file.setContent(output.content);
            codeGenResponse.addFile(file);
        }

        process.stdout.write(Buffer.from(codeGenResponse.serializeBinary()));
    } catch (err) {
        console.error('protoc-gen-frontend error: ' + err.stack + '\n');
        process.exit(1);
    }
});
