import { StudioServiceResponse } from "../models/responses/studioServiceResponse.js";
import { StudioRepository } from "../repositories/studioRepository.js";

export class StudioService {
  constructor(studioRepository) {
    this.studioRepository = new StudioRepository();
  }

  async createStudio(studio) {
    this.studios.push(studio);
  }

  addEquipment(equipment) {
    throw new Error("StudioService.addEquipment() not implemented");
  }

  getStudios() {
    let ret = new StudioServiceResponse();
    let res = this.studioRepository.getStudios();
    if (res) {
      ret.any = true;
      ret.studios = res;
    }
    return ret;
  }

  getEquipment() {
    return this.equipment;
  }
}