import * as path from "path";
import * as fs from "fs";
import { parse } from "@grpc-web-framework/parser/src";
import { FileDescriptor } from "@grpc-web-framework/parser/src/reflection/FileDescriptor";

export type GeneratorOut = Map<string, FileDescriptor>

export interface IGeneratorOptions {
    protoDir: string,
    outDir: string,
}

export interface WalkByFiles<T> {
    filename: string;
    result: T;
}

export interface WalkByFilesInit<T> extends WalkByFiles<T> {
    each: (params: WalkByFiles<T>) => void;
}

const walkByFiles = <T>({ filename, each, result }: WalkByFilesInit<T>): T => {
    const dirFiles = fs.readdirSync(filename);

    for (const item of dirFiles) {
      const filepath = path.join(filename, item);
      const dir = fs.statSync(filepath).isDirectory();

      dir 
        ? walkByFiles({ each, result, filename: filepath }) 
        : each({ result, filename: filepath });
    }

    return result;
  }


export const resolve = (opts: IGeneratorOptions) => {
    const protoDir = path.isAbsolute(opts.protoDir) ? opts.protoDir : path.join(process.cwd(), opts.protoDir);
    const _outDir = path.isAbsolute(opts.outDir) ? opts.outDir : path.join(process.cwd(), opts.outDir);

    return walkByFiles<GeneratorOut>({
        filename: protoDir,
        result: new Map(),
        each: ({ result, filename }) => {
            if (path.extname(filename) === '.proto') {
                const parsed = parse(fs.readFileSync(filename, 'utf8'));
                result.set(filename, parsed);
            }
        },
    });
}

export const resolveDependencies = (walkResultMap: parse) => {
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