export class StudioServiceResponse {
  constructor(results = false, studios = []) {
    this.any = results;
    this.studios = studios
  }
}