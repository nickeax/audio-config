import { StudioManager } from "./studioManager.js";
import { StudioRepository } from "../repositories/studioRepository.js";
import { StudioService } from "../services/studioService.js";
import { Ui } from "./ui.js";
import { Common } from "../models/common.js";
import { Utilities } from "./utilities.js";

export class Factory {
  static createInstance(className) {
    switch (className) {
      case 'Ui': return this.createUi();
      case 'StudioService': return this.createStudioService();
      case 'StudioManager': return this.createStudioManager();
      case 'StudioRepository': return this.createStudioRepository();
      case 'Utilities': return this.createUtility();
      default:
        break;
    }
  }

  static createStudioManager() {
    return new StudioManager(this.createStudioService());
  }

  static createUi() {
    return new Ui(this.createStudioManager());
  }

  static createStudioService() {
    return new StudioService(this.createStudioRepository());
  }

  static createStudioRepository() {
    return new StudioRepository();
  }

  static createUtility() {
    return new Utilities();
  }
}
