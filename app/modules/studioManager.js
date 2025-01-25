import { Studio } from '../models/studio.js';
import { Rack } from '../models/rack.js';
export class StudioManager {
  constructor(studioService) {
    this.studioOutput = document.querySelector('#studioOutput');

    this.studioService = studioService;

    this.currentStudio = new Studio();
    this.equipment = [];
    this.racks = [];
    this.patchBays = [];

    // Load studios from local storage
    this.studios = this.studioService.getStudios();
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
    form.innerHTML = `
      <label for="studioName">Studio Name</label>
      <input type="text" id="studioName" name="studioName">
      <button type="submit">Create Studio</button>
    `;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let studioName = document.getElementById('studioName').value;
      this.addStudio(new Studio(studioName));
    });
    return form;
  }

  /*
  <header class="topRadius">
        <div class="sectionHeader topRadius">Studio Equipment Wrangler</div>
     </header>
  
      <nav id="navOutput">
        nav
      </nav>
  
      <main id="studioOutput">
  
      </main>
  
      <div id="">
        hello
      </div>
  
      <div>
  
      </div>
  */

  drawMainScreen() {
    console.log('Drawing main screen');

    this.studioOutput.innerHTML = 'Hey kids!';
  }

  buildElement(tag, id, classes, text) {
    let element = document.createElement(tag);
    if (id) {
      element.id = id;
    }
    if (classes) {
      classes.forEach(c => {
        element.classList.add(c);
      });
    }
    if (text) {
      element.innerText = text;
    }
    return element;
  }
}