import "babel-plugin-tsxt";

export default ({ packageName, fileName }: { packageName: string, fileName: string }) => (
    <templ>
        {`// @ts-nocheck`};
        {`//`};
        {`// GENERATED CODE -- DO NOT EDIT!`}
        {`//`}
        {`// package: ${packageName}`}
        {`// file: ${fileName}`}
    </templ>
);