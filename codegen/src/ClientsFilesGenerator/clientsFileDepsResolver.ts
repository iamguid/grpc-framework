import { FileDescriptor } from "../reflection/FileDescriptor";
import { WellKnownTypesFilesMap } from "../WellKnownTypes/WellKnownTypesFilesMap";
import { getPathToRoot, replaceProtoSuffix, filePathToPseudoNamespace } from "../utils";
import { MessageDescriptor } from "../reflection/MessageDescriptor";

export interface Import {
    name: string;
    path: string;
}

export interface Dependency {
    import: Import,
    fullTypePath: string,
}

export interface Dependencies {
    imports: Import[],
    deps: Map<string, Dependency>
}

export const clientsFileDepsResolver = (fileDescriptor: FileDescriptor) => {
    const imports: Map<string, Import> = new Map();
    const dependencies: Map<string, Dependency> = new Map();
    const pathToRoot = getPathToRoot(fileDescriptor.name);
    const dependenciesList = getDepsList(fileDescriptor)

    console.warn(dependenciesList);

    for (const path of dependenciesList) {
        const entry = fileDescriptor.registry.getEntry(path);
        const filePathWithoutExtension = replaceProtoSuffix(entry.name, 'dto');
        const importName = filePathToPseudoNamespace(filePathWithoutExtension);

        if (entry.name in WellKnownTypesFilesMap) {
            const importPath = WellKnownTypesFilesMap[entry.name];

            if (!imports.has(filePathWithoutExtension)) {
                imports.set(filePathWithoutExtension, { name: importName, path: importPath });
            }

            const imprt = imports.get(filePathWithoutExtension)!;
            dependencies.set(path, { import: imprt, fullTypePath: `${imprt.name}.${entry.name}` });
        } else {
            const importPath = pathToRoot + `${filePathWithoutExtension}.ts`;

            if (!imports.has(filePathWithoutExtension)) {
                imports.set(filePathWithoutExtension, { name: importName, path: importPath });
            }

            const imprt = imports.get(filePathWithoutExtension)!;
            dependencies.set(path, { import: imprt, fullTypePath: `${imprt.name}.${entry.name}` });
        }
    }

    return {
        imports: Array.from(imports.values()),
        deps: dependencies
    };
}


const getDepsList = (fileDescriptor: FileDescriptor) => {
    const dependenciesList: string[] = [];

    const processNested = (messageDescriptor: MessageDescriptor) => {
        for (const messageField of messageDescriptor.fields) {
            if (messageField.type) {
                dependenciesList.push(messageField.type)
            }
        }

        messageDescriptor.messages.forEach(messageDescriptor => {
            processNested(messageDescriptor);
        });
    };

    fileDescriptor.messages.forEach(messageDescriptor => {
        processNested(messageDescriptor);
    });

    fileDescriptor.services.forEach(serviceDescriptor => {
        serviceDescriptor.methods.forEach(methodDecriptor => {
            dependenciesList.push(methodDecriptor.inputType);
            dependenciesList.push(methodDecriptor.outputType);
        });
    });

    return dependenciesList;
}
