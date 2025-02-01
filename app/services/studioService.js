import { StudioServiceResponse } from "../models/responses/studioServiceResponse.js";
import { Factory } from "../modules/factory.js";

export class StudioService {
  constructor(studioRepository) {
    this.studioRepository = Factory.createInstance('StudioRepository');
  }

  createStudio(studio) {
    console.log(studio);

    this.studioRepository.createStudio(studio);

  }

  addEquipment(equipment) {
    throw new Error("StudioService.addEquipment() not implemented");
  }

  getStudioById(id) {
    let res = this.studioRepository.getStudioById(id);
    if (res) {
      let ret = new StudioServiceResponse(true, [JSON.parse(res)])

      return ret;
    }
    return new StudioServiceResponse(false);
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