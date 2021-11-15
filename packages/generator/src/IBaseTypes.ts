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
