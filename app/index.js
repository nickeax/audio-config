import { Ui } from "./modules/ui.js";
import { Patchbay } from "./models/patchBay.js";

const ui = new Ui();

const pb = new Patchbay(8);
console.log(pb);