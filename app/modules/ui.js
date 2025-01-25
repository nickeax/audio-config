export class Ui {
  constructor(studioManager) {

    this.studioManager = studioManager;
    this.studioManager.drawStudioMainPage();
  }

  processClick() {
    throw new Error("Ui.processClick() not implemented");
  }
}