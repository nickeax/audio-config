import { Factory } from './factory.js';
import { Studio } from '../models/studio.js';
import { Common } from '../models/common.js';
export class StudioManager {
  constructor(studioService) {
    this.utils = Factory.createInstance('Utilities');
    this.studioOutput = document.querySelector('#studioOutput');
    this.currentConfiguration = document.querySelector('#currentConfiguration');
    this.studioSelection = document.querySelector('#studioSelection');

    this.studioService = studioService;

    this.currentStudio = null;
    this.equipment = [];
    this.racks = [];
    this.patchBays = [];

    this.refreshState();
  }

  refreshState() {
    let res = [];
    res = this.studioService.getStudios();
    this.currentConfiguration.innerHTML = '';

    this.createStudioList(res.studios);

    if (res.length > 0) {
      this.studios = res.studios;
      this.currentConfiguration.appendChild(this.drawStudioCreateForm());
    } else {
      console.log('Refreshing state');
      if (this.currentStudio) {
        this.currentConfiguration.appendChild(this.drawStudioCreateForm());
      }
      this.currentConfiguration.appendChild(this.drawStudioCreateForm());
    }
  }

  createStudioList(studios) {
    this.studioSelection.innerHTML = '';
    if (studios.length > 0) {
      let ul = document.createElement('ul');
      studios.forEach(s => {
        let li = document.createElement('li');
        li.classList.add('listItemButton');
        li.innerText = s.name;
        li.id = `${Common.APP_ID}||${s.id}`;
        ul.appendChild(li);
      });
      let btn = document.createElement('button');
      btn.classList.add('btn', 'btn-small', 'btnSuccess');
      btn.innerText = 'Create Studio...';
      btn.id = 'btnNewStudio';
      ul.appendChild(btn);

      this.studioSelection.appendChild(ul);
    } else {
      this.studioSelection.innerHTML = 'No studios found, please create one.';
    }
  }

  // Equipment
  addEquipment(equipment) {
  }

  getEquipment() {
  }

  updateEquipment(equipment) {
  }

  removeEquipment(equipment) {
  }

  // Racks
  addRack(rack) {
  }

  getRacks() {
  }

  updateRack(rack) {
  }

  removeRack(rack) {
  }

  // Patch Bays
  addPatchBay(patchBay) {
  }

  getPatchBays() {
  }

  updatePatchBay(patchBay) {
  }

  removePatchBay(patchBay) {
  }

  // Studios
  addStudio(inputData) {
    console.log(inputData);
    let newStudio = new Studio(inputData);
    newStudio.created = new Date();
    newStudio.modified = new Date();
    newStudio.id = this.utils.generateId();

    this.studioService.createStudio(newStudio);

    this.refreshState();

  }

  getStudio(id) {
    let res = this.studioService.getStudioById(id);
    this.currentStudio = res.studios[0];
    this.currentConfiguration.innerHTML = '';
    this.currentConfiguration.appendChild(this.drawStudioCreateForm());

    return res;
  }

  updateStudio(studio) {
  }

  removeStudio(studio) {
  }

  // Draw
  // If no studio is selected, draw add studio form
  // If studio is selected, draw studio config screen, 
  drawConfigScreen() {

  }

  drawStudioMainPage() {
    const sectionHeader = this.buildElement('div', null, ['sectionHeader', 'topRadius', 'panelPadding-5'], 'Studio Equipment Wrangler');
    const header = this.buildElement('header', null, ['topRadius'], null);
    header.appendChild(sectionHeader);

    this.studioOutput.appendChild(header);

    const nav = document.createElement('nav');
    nav.id = 'navOutput';
    nav.innerHTML = 'nav';
    this.studioOutput.appendChild(nav);

    const main = document.createElement('main');
    main.id = 'studioOutput';
    main.innerHTML = 'main';
    this.studioOutput.appendChild(main);
  }

  drawStudioCreateForm() {
    let form = document.createElement('form');
    form.id = 'studioCreateForm';
    console.log(this.currentStudio);

    if (this.currentStudio !== null) {
      console.log(this.currentStudio.name);

      form.appendChild(this.utils.createFormElementWithLabel('input', 'studioName', ['darkerTintColour', 'textMainLight'], 'Name', 'Enter the studio name', ['studioName'], this.currentStudio.name));
      form.appendChild(this.utils.createFormElementWithLabel('input', 'studioPurpose', ['darkerTintColour', 'textMainLight'], 'Purpose', 'Primary purpose of the studio', ['studioPurpose'], this.currentStudio.purpose));
      form.appendChild(this.utils.createFormElementWithLabel('textarea', 'notes', ['darkerTintColour', 'textMainLight'], 'Notes', 'Studio notes', ['notes'], this.currentStudio.notes));
      form.appendChild(this.utils.createFormElementWithLabel('button', 'btnUpdateStudio', ['btn', 'btnOperation'], 'Update Studio', 'Notes relating to studio', [], null, 'Update'));
      form.appendChild(this.utils.createFormElementWithLabel('button', 'btnDeleteStudio', ['btn', 'btnDanger'], 'Delete Studio', 'Notes relating to studio', [], null, 'Delete'));
    } else {
      form.appendChild(this.utils.createFormElementWithLabel('input', 'studioName', ['darkerTintColour', 'textMainLight'], 'Name', 'Enter the studio name'));
      form.appendChild(this.utils.createFormElementWithLabel('input', 'studioPurpose', ['darkerTintColour', 'textMainLight'], 'Purpose', 'Primary purpose of the studio'));
      form.appendChild(this.utils.createFormElementWithLabel('textarea', 'notes', ['darkerTintColour', 'textMainLight'], 'Notes', 'Studio notes'));
      form.appendChild(this.utils.createFormElementWithLabel('button', 'btnCreateStudio', ['btn', 'btnSuccess'], 'Create Studio', 'Notes relating to studio', ['studioName', 'notes', 'studioPurpose'], null, 'Create Studio'));
    }


    return form;
  }


}