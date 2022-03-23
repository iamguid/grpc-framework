import "babel-plugin-tsxt";
import { Import } from "../src/BaseGeneratorTypes";

export default ({ imports }: { imports: Import[] }, children: string[]) => (
    <templ>
        {children}
        <ln />

        {imports.map((imprt) => (
            <templ>
                {`import * as ${imprt.name} from "${imprt.path}";`}
            </templ>
        ))}
    </templ>
);
