import * as Handlebars from "handlebars";
import * as fs from "fs";
import { IGenerator } from "./IGenerator";
import { IGeneratorInput } from "./IGeneratorInput";
import { IGeneratorOutput } from "./IGeneratorOutput";

export interface IHandlebarsGeneratorInput<TContext> extends IGeneratorInput<TContext> {
  handlebarsTeamplateFilePath: string;
}

export class HandlebarsGenerator<TContext> implements IGenerator<IHandlebarsGeneratorInput<TContext>> {
  public readonly generated: IGeneratorOutput[] = [];

  public generateFile(generatorInput: IHandlebarsGeneratorInput<TContext>) {
    const templateStr = fs.readFileSync(generatorInput.handlebarsTeamplateFilePath).toString('utf8')
    const teamplate = Handlebars.compile(templateStr, { noEscape: true })
    const result = teamplate(generatorInput.generatorCtx, { allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault: true });

    this.generated.push({
      fileName: generatorInput.resultFileName,
      content: result,
    });
  }
}
