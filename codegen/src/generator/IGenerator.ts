import { IGeneratorInput } from "./IGeneratorInput";
import { IGeneratorOutput } from "./IGeneratorOutput";

export interface IGenerator<TGeneratorInput extends IGeneratorInput> {
    readonly generated: IGeneratorOutput[];
    generateFile(input: TGeneratorInput): void;
}
