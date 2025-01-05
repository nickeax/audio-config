import { Studio } from 'models/studio.js';
import { Rack } from './rack.js';
export class StudioManager {
  constructor() {
    this.studio = new Studio();
    this.equipment = [];
    this.racks = [];
    this.patchBays = [];
  }

  addEquipment(equipment) {
    this.equipment.push(equipment);
  }

  removeEquipment(equipment) {
    this.equipment = this.equipment.filter(e => e !== equipment);
  }

  addRack(rack) {
    this.racks.push(rack);
  }

  removeRack(rack) {
    this.racks = this.racks.filter(r => r !== rack);
  }

  addPatchBay(patchBay) {
    this.patchBays.push(patchBay);
  }

  removePatchBay(patchBay) {
    this.patchBays = this.patchBays.filter(p => p !== patchBay);
  }

  getEquipment() {
    return this.equipment;
  }

  getRacks() {
    return this.racks;
  }

  getPatchBays() {
    return this.patchBays;
  }

  getEquipmentCount() {
    return this.equipment.length;
  }

  getRackCount() {
    return this.racks.length;
  }

  getPatchBayCount() {
    return this.patchBays.length;
  }

  drawStudio() {
    console.log('Drawing studio...');
  }
}