import * as path from "path";
import * as fs from "fs";

export interface WalkByFiles<T> {
    basePath: string;
    filePath: string;
    result: T;
}

export interface WalkByFilesProps<T> extends WalkByFiles<T> {
    each: (params: WalkByFiles<T>) => void;
}

export const walkByFiles = <T>({ basePath, filePath, each, result }: WalkByFilesProps<T>): T => {
    const filesDir = fs.readdirSync(path.join(basePath, filePath));

    for (const item of filesDir) {
      const fullFilePath = path.join(basePath, filePath, item);
      const isDirectory = fs.statSync(fullFilePath).isDirectory();

      isDirectory 
        ? walkByFiles({ each, result, basePath, filePath: path.join(filePath, item) }) 
        : each({ result, basePath, filePath: path.join(filePath, item) });
    }

    return result;
}
