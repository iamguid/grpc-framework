import * as path from "path";
import * as fs from "fs";
import { parse, FileDescriptor } from "@grpc-web-framework/parser";
import { walkByFiles } from "./filesWalker";
import { FileDescriptorWrapper } from "./FileDescriptorWrapper";
import { WellKnownTypesFilesMap } from "./WellKnownTypesFilesMap";
import { ClientsFilesGenerator } from "./ClientsFilesGenerator";

const makeFilesDescriptorsWrappers = (filesDescriptorsMap: Map<string, FileDescriptor>): FileDescriptorWrapper[] => {
    const wrappers: Map<string, FileDescriptorWrapper> = new Map();

    function resolve(fileName: string, fileDescriptor: FileDescriptor): FileDescriptorWrapper {
        const imports = fileDescriptor.imports.filter(imprt => {
            if (imprt.path in WellKnownTypesFilesMap) {
                return false;
            }

            return true;
        })

        for (const imprt of imports) {
            if (wrappers.has(imprt.path)) {
                return wrappers.get(imprt.path)!;
            } else {
                wrappers.set(imprt.path, resolve(imprt.path, filesDescriptorsMap.get(imprt.path)!));
            }
        }

        const dependenciesMap = imports.reduce((accum, imprt) => {
            return accum.set(imprt.path, wrappers.get(imprt.path)!)
        }, new Map());

        const newWrapper = new FileDescriptorWrapper(fileName, fileDescriptor, dependenciesMap);

        wrappers.set(fileName, newWrapper);

        return newWrapper;
    }

    for (const [key, value] of filesDescriptorsMap) {
        resolve(key, value)
    }

    return Array.from(wrappers.values());
}

const resolve = (protoDir: string): FileDescriptorWrapper[] => {
    const walkResult = walkByFiles<Map<string, FileDescriptor>>({
        basePath: protoDir,
        filePath: "",
        result: new Map(),
        each: ({ result, basePath, filePath }) => {
            if (path.extname(filePath) === '.proto') {
                const parsed = parse(fs.readFileSync(path.join(basePath, filePath), 'utf8'));
                result.set(filePath, parsed);
            }
        },
    });

    return makeFilesDescriptorsWrappers(walkResult);
}

const generate = (opts: { protoDir: string, outDir: string }) => {
    const protoDir = path.isAbsolute(opts.protoDir) ? opts.protoDir : path.join(process.cwd(), opts.protoDir);
    const outDir = path.isAbsolute(opts.outDir) ? opts.outDir : path.join(process.cwd(), opts.outDir);
    const resolvedDir = resolve(protoDir);
    const generator = new ClientsFilesGenerator(resolvedDir);
    generator.generateClients()

    fs.mkdirSync(outDir, { recursive: true });
    for (const result of generator.generated) {
        fs.writeFileSync(path.join(outDir, result.fileName), result.content);
    }
}

generate({ protoDir: "../../packages/proto", outDir: "./generated" })