import { StudioRepository } from "../repositories/studioRepository.js";

export class StudioService {
  constructor(studioRepository) {
    this.studioRepository = new StudioRepository();
  }

  createStudio(studio) {
    this.studios.push(studio);
  }

  addEquipment(equipment) {
    throw new Error("StudioService.addEquipment() not implemented");
  }

  getStudios() {
    throw new Error("StudioService.getStudios() not implemented");
  }

  getEquipment() {
    return this.equipment;
  }
}