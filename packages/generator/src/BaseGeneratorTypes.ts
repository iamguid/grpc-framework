export type Import = {
    name: string;
    path: string;
}

export type Dependency = {
    import: Import;
    typePath: string;
}

export type Dependencies = {
    imports: Import[];
    deps: Map<string, Dependency>;
}
