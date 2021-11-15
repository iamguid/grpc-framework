import { IGenerator } from "./IGenerator";
import { IGeneratorInput } from "./IGeneratorInput";
import { IGeneratorOutput } from "./IGeneratorOutput";

export interface ITSXTGeneratorInput<TContext> extends IGeneratorInput<TContext> {
  template: (ctx: TContext) => string;
}

export class TSXTGenerator<TContext> implements IGenerator<ITSXTGeneratorInput<TContext>> {
  public readonly generated: IGeneratorOutput[] = [];

  public generateFile(generatorInput: ITSXTGeneratorInput<TContext>) {
    const result = generatorInput.template(generatorInput.generatorCtx);

    this.generated.push({
      fileName: generatorInput.resultFileName,
      content: result
    });
  }
}
