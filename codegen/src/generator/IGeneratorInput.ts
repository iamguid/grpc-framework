export interface IGeneratorInput<IContext = any> {
    protoFileName: string;
    resultFileName: string;
    generatorCtx: IContext;
}
