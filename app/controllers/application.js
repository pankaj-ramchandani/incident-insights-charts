import Controller from '@ember/controller';
export default class ApplicationController extends Controller {
  incidents = [];
  options = {
    xAxis: {
      type: 'category',
      data: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan'],
      name: 'Dates',
    },
    yAxis: {
      type: 'value',
      name: 'Costing',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar',
      },
    ],
  };

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
