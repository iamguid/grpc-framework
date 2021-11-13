import "babel-plugin-tsxt";
import { Import } from "../src/IBaseTypes";

export default ({ imports }: { imports: Import[] }, children: string[]) => (
    <templ>
        {children}
        <ln />

        {imports
        .map((imprt) => (
            <templ>{`import * ${imprt.name} from "${imprt.path}";`}</templ>
        ))
        .join("")}
    </templ>
);
