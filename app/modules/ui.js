export class Ui {
  constructor(studioManager) {

    this.studioManager = studioManager;
  }

  processClick() {
    throw new Error("Ui.processClick() not implemented");
  }

  processInput() {
    throw new Error("Ui.processInput() not implemented");
  }
}