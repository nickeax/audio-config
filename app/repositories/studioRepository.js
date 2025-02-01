import { Factory } from "../modules/factory.js";
import { Common } from "../models/common.js";

export class StudioRepository {
  // Use local storage to persist studios
  constructor() {
    this.utils = Factory.createInstance('Utility');
    this.studios = JSON.parse(localStorage.getItem('studios')) || [];
  }

  // Add a studio to the repository
  createStudio(studio) {
    localStorage.setItem(`${Common.APP_ID}||${studio.name}`, JSON.stringify(studio));
  }

  // Get all studios from the repository
  getStudios() {
    let ret = [];
    let localStorageKeys = Object.keys(localStorage).filter(k => k.includes('audio_config_app_v1.00'));

    localStorageKeys.forEach(k => {
      let res = localStorage.getItem(k);
      ret.push(JSON.parse(res));
    });

    return ret;
  }

  // Get a studio by id
  getStudioById(key) {
    let ret = localStorage.getItem(key);

    return ret;
  }

  // Add equipment to a studio
  addEquipment(studioId, equipment) {
    const studio = this.getStudioById(studioId);
    studio.equipment.push(equipment);
    localStorage.setItem(this.common.APP_ID, JSON.stringify(this.studios));
  }

}