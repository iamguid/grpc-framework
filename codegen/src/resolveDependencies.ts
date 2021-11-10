import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { FileDescriptor } from "./reflection/FileDescriptor";

export const resolveDependencies = (protoFilesList: FileDescriptorProto[]) => {
    const filesProtoDescriptors: Map<string, FileDescriptorProto> = new Map();
    const filesDescriptors: Map<string, FileDescriptor> = new Map();

    protoFilesList.forEach(fileDescriptorProto => {
        filesProtoDescriptors.set(fileDescriptorProto.getName()!, fileDescriptorProto);
    });

    function resolveDeps(fileDescriptorProto: FileDescriptorProto) {
        const dependenciesProtoDescriptors = fileDescriptorProto.getDependencyList()
            .map(filename => filesProtoDescriptors.get(filename)!);

        const dependencies: FileDescriptor[] = [];

        for (const dependencyProtoDescriptor of dependenciesProtoDescriptors) {
            if (filesDescriptors.has(dependencyProtoDescriptor.getName()!)) {
                return filesDescriptors.get(dependencyProtoDescriptor.getName()!)!;
            } else {
                dependencies.push(resolveDeps(dependencyProtoDescriptor));
            }
        }

        const descriptor = new FileDescriptor(fileDescriptorProto, dependencies);
        filesDescriptors.set(fileDescriptorProto.getName()!, descriptor)
        return descriptor;
    }

    Array.from(filesProtoDescriptors.values()).forEach(protoDescriptor => {
        resolveDeps(protoDescriptor);
    })

    return filesDescriptors;
}
