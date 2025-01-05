import { Common } from './common.js';
import { EquipmentBase } from './equipmentBase.js';
export class Patchbay extends EquipmentBase {
  constructor(ports = 0) {
    super();
    this.type = new Common().EQUIPMENT_TYPES.PatchBay;
    this.numberOfPorts = ports; // X four to represent front input/output and rear input/output
  }
}