import { StudioManager } from "./studioManager.js";
import { StudioRepository } from "../repositories/studioRepository.js";
import { StudioService } from "../services/studioService.js";
import { Ui } from "./ui.js";

export class Factory {
  createInstance(className, ...args) {
    switch (className) {
      case 'StudioManager': return this.createStudioManager();
      case 'Ui': return this.createUi();
      default:
        break;
    }
  }

  createStudioManager() {
    return new StudioManager(this.createStudioService());
  }

  createUi() {
    return new Ui(this.createStudioManager());
  }

  createStudioService() {
    return new StudioService(this.createStudioRepository());
  }

  createStudioRepository() {
    return new StudioRepository();
  }

  createUtility() {
    return new Utility();
  }
}
