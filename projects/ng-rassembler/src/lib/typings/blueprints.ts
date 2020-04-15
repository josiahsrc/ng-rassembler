import { Type } from "@angular/core";
import { RassemblerNode } from "./node";

export interface RassemblerBlueprints {

    mapping: Map<String, Type<any>>;

    root: RassemblerNode;

}
