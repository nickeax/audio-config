import { Common } from "../models/common.js";
export class Ui {
  constructor(studioManager) {

    this.studioManager = studioManager;
    this.buttons = [];
    this.inputs = [];
    this.textAreas = [];

    document.addEventListener('click', ev => this.processClick(ev));
    document.addEventListener('input', ev => this.processInput(ev));

    this.init();
  }

  processClick(ev) {
    ev.preventDefault();

    // Is ev a button?    
    if (ev.target.nodeName === 'BUTTON') {
      let targetButton = this.buttons.find(x => x == ev.target);

      if (ev.target.id) {
        switch (ev.target.id) {
          case 'btnCreateStudio':
            this.studioManager.addStudio({
              name: this.inputs[0].value,
              purpose: this.inputs[1].value,
              notes: this.textAreas[0].value
            });
            this.init();
            break;
          case 'btnNewStudio':
            this.studioManager.currentStudio = null;
            console.log('Hello New Studio');
            this.studioManager.refreshState();
            this.init();
            break;

          default:
            break;
        }
      }
    } else if (ev.target.nodeName === 'LI') {
      switch (ev.target.id) {
        default:
          let key = `${Common.APP_ID}||${ev.target.innerText}`;
          let stud = this.studioManager.getStudio(key);
          break;
      }
    }
  }

  processInput(ev) {
    this.setActiveButtons();
  }

  init() {
    this.buttons = Array.from(document.querySelectorAll('button'));
    this.inputs = Array.from(document.querySelectorAll('input'));
    this.textAreas = Array.from(document.querySelectorAll('textarea'));

    this.setActiveButtons();
  }

  setActiveButtons() {
    let isValid = true;
    this.buttons.forEach(function (button) {
      button.isValid = false;
      if (button.dataset.validateInputDependencies === undefined) {
        return;
      }
      let validationIds = button.dataset.validateInputDependencies.split('||');

      validationIds.forEach(vi => {
        if (document.querySelector(`#${vi}`).value.length === 0) {
          isValid = false;
        }

        if (!isValid) {
          button.disabled = true;
          button.classList.add('btnDisabled');
        } else {
          button.disabled = false;
          button.classList.remove('btnDisabled');
        }
      });
    });
  }
}