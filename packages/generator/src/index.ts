import * as path from "path";
import * as fs from "fs";
import { parse, FileDescriptor } from "@grpc-web-framework/parser";
import { walkByFiles } from "./filesWalker";
import { FileDescriptorWrapper } from "./FileDescriptorWrapper";

const makeFilesDescriptorsWrappers = (filesDescriptosMap: Map<string, FileDescriptor>): FileDescriptorWrapper[] => {
    const wrappers: Map<string, FileDescriptorWrapper> = new Map();

    function resolve(fileName: string, fileDescriptor: FileDescriptor): FileDescriptorWrapper {
        console.log("fileDescriptor", fileName, fileDescriptor);

        for (const imprt of fileDescriptor.imports) {
            if (wrappers.has(imprt.path)) {
                return wrappers.get(imprt.path)!;
            } else {
                wrappers.set(imprt.path, resolve(imprt.path, filesDescriptosMap.get(imprt.path)!));
            }
        }

        const dependenciesMap = fileDescriptor.imports.reduce((accum, imprt) => {
            return accum.set(imprt.path, wrappers.get(imprt.path)!)
        }, new Map());

        const newWrapper = new FileDescriptorWrapper(fileName, fileDescriptor, dependenciesMap);

        wrappers.set(fileName, newWrapper);

        return newWrapper;
    }

    for (const [key, value] of filesDescriptosMap) {
        resolve(key, value)
    }

    return Array.from(wrappers.values());
}

export const resolve = (protoDir: string): FileDescriptorWrapper[] => {
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

    // console.log("walkresult", JSON.stringify(Array.from(walkResult.entries()).map(([key, value]) => value.toObject()), undefined, 2));

    return makeFilesDescriptorsWrappers(walkResult);
}

console.log(resolve(path.join(__dirname, "../../proto")));
