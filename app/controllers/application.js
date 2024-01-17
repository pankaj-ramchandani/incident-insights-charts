import Controller from '@ember/controller';
import { service } from '@ember/service';
import { SAFETY_INCIDENT_CHARTS } from '../utils/constants';
export default class ApplicationController extends Controller {
  @service('chart-info-constructor') chart;
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
    ],};

  async init() {
    super.init(...arguments);
    await this.loadData();
    let datasets = this.chart.countOccurrences(this.incidents, 'severity');
    const currentChartId = 1;
    const chartMetaDetails = SAFETY_INCIDENT_CHARTS.find(
      (obj) => obj.id === currentChartId,
    );
    this.options = this.chart.generateChartOptions(
      chartMetaDetails.chartType,
      chartMetaDetails.xAxisLabel,
      chartMetaDetails.yAxisLabel,
      Object.keys(datasets),
      Object.values(datasets),
    );
    console.log(this.options);
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
