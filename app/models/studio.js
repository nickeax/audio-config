export class Studio {
  constructor(inputData) {
    if (inputData) {
      this.name = inputData.name;
      this.purpose = inputData.purpose;
      this.notes = inputData.notes;
    } else {
      this.name = '';
      this.purpose = '';
      this.notes = '';
    }
  }
}