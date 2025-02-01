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

      if (targetButton) {
        switch (targetButton.id) {
          case 'btnCreateStudio':
            this.studioManager.addStudio({
              name: this.inputs[0].value,
              purpose: this.inputs[1].value,
              notes: this.textAreas[0].value
            });
            this.init();
            break;

          default:
            break;
        }
      }
    } else if (ev.target.nodeName === 'LI') {
      let key = `${Common.APP_ID}||${ev.target.innerText}`;
      let stud = this.studioManager.getStudio(key);
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