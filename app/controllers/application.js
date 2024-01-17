import Controller from '@ember/controller';
import { service } from '@ember/service';
import { SAFETY_INCIDENT_CHARTS } from '../utils/constants';
import { tracked } from '@glimmer/tracking';
export default class ApplicationController extends Controller {
  @service('chart-info-constructor') chart;
  @tracked incidents = [];
  @tracked options = {
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5'],
      name: 'Severity Level',
    },
    yAxis: {
      type: 'value',
      name: 'No. of Incidents',
    },
    series: [
      {
        data: [15, 5, 11, 9, 10],
        type: 'bar',
      },
    ],
  };
  @tracked chartID = 0;

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
    this.chartID = currentChartId;
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
