import { Factory } from './factory.js';
import { Utilities } from "./utilities.js";
import { Studio } from '../models/studio.js';
import { Rack } from '../models/rack.js';
export class StudioManager {
  constructor(studioService) {
    this.studioOutput = document.querySelector('#studioOutput');
    this.currentConfiguration = document.querySelector('#currentConfiguration');
    this.studioSelection = document.querySelector('#studioSelection');

    this.studioService = studioService;

    this.currentStudio = new Studio();
    this.equipment = [];
    this.racks = [];
    this.patchBays = [];

    this.refreshState();
  }

  refreshState() {
    let res = this.studioService.getStudios();

    this.createStudioList(res.studios);

    if (res.any) {
      this.studios = res.studios;
    } else {
      this.currentConfiguration.appendChild(this.drawStudioCreateForm());
    }
  }

  createStudioList(studios) {
    if (studios.length > 0) {
      let ul = document.createElement('ul');
      studios.forEach(s => {
        let li = document.createElement('li');
        li.innerText = s.name;
        ul.appendChild(li);
      });
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
  addStudio(studio) {
  }

  getStudios() {
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

    const div1 = document.createElement('div');
    div1.innerHTML = 'hello';
    this.studioOutput.appendChild(div1);
  }

  drawStudioCreateForm() {
    let form = document.createElement('form');
    form.id = 'studioCreateForm';
    form.appendChild(Utilities.createFormElementWithLabel('input', 'studioName', 'Name'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'studioPurpose', 'Purpose'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'studioAddress', 'Studio Name'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'city', 'City'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'state', 'State'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'zip', 'Zip/postal code'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'phone', 'Phone'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'email', 'Email'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'website', 'Website'));
    form.appendChild(Utilities.createFormElementWithLabel('input', 'notes', 'Notes'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let studioName = document.getElementById('studioName').value;
      this.addStudio(new Studio(studioName));
    });

    return form;
  }


}