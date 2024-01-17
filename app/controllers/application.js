import Controller from '@ember/controller';
export default class ApplicationController extends Controller {
  incidents = [];

  async init() {
    super.init(...arguments);
    await this.loadData();
  }

  async loadData() {
    try {
      const url = '/safety-incidents.json';
      const incidents = await fetch(url);
      const incidentsRes = await incidents.json();
      this.set('incidents', incidentsRes);
    } catch (error) {
      console.error('Error loading safety incidents:', error);
    }
  }
}
