export class Ui {
  constructor(studioManager) {

    this.studioManager = studioManager;

    document.addEventListener('click', ev => this.processClick(ev));
  }

  processClick(ev) {
    console.log(`There was a click!`, ev.target);
  }

  processInput(ev) {
    throw new Error("Ui.processInput() not implemented");
  }
}