export class StudioRepository {
  // Use local storage to persist studios
  constructor() {
    this.studios = JSON.parse(localStorage.getItem('studios')) || [];
  }

  // Add a studio to the repository
  addStudio(studio) {
    this.studios.push(studio);
    localStorage.setItem('studios', JSON.stringify(this.studios));
  }

  // Get all studios from the repository
  getStudios() {
    return this.studios;
  }

  // Get a studio by id
  getStudioById(id) {
    return this.studios.find(s => s.id === id);
  }

  // Add equipment to a studio
  addEquipment(studioId, equipment) {
    const studio = this.getStudioById(studioId);
    studio.equipment.push(equipment);
    localStorage.setItem('studios', JSON.stringify(this.studios));
  }

}