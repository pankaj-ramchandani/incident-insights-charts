import Controller from '@ember/controller';
import { service } from '@ember/service';
import { SAFETY_INCIDENT_CHARTS } from '../utils/constants';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ApplicationController extends Controller {
  chartsDetails = SAFETY_INCIDENT_CHARTS;
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
  @tracked chartID = 1;
  @tracked chartDescription = 0;
  async init() {
    super.init(...arguments);
    await this.loadData();
    this.generateNewChart();
  }

  // this can be refactored further and optimized
  generateNewChart() {
    let chartMetaDetails = {};
    let chartData = {};
    let currentChartId = parseInt(this.chartID);
    switch(currentChartId) {
      case 1:
        chartData = this.chart.countOccurrences(this.incidents, 'severity');
        chartMetaDetails = SAFETY_INCIDENT_CHARTS.find(
          (obj) => obj.id === currentChartId,
        );
        this.options = this.chart.generateBarChartOptions(
          chartMetaDetails.chartType,
          chartMetaDetails.xAxisLabel,
          chartMetaDetails.yAxisLabel,
          Object.keys(chartData),
          Object.values(chartData),
        );
        this.chartDescription = chartMetaDetails.chartDescription;
        // console.log(this.options);
        break;
      case 2:
        chartData = this.chart.countOccurrences(this.incidents, 'incidentKind');
        chartMetaDetails = SAFETY_INCIDENT_CHARTS.find(
          (obj) => obj.id === currentChartId,
        );
        chartData = Object.entries(chartData).map(([name, value]) => ({
          name,
          value,
        }));
        this.options = this.chart.generatePieChartOptions(
          chartData,
          chartMetaDetails.chartName,
        );
        console.log(chartData);
        this.chartDescription = chartMetaDetails.chartDescription;
        // const resultArray = Object.entries(incidentKindCounts).map(([name, value]) => ({
        //   name,
        //   value,
        // }));
        break;
      default:
        break;
    }
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

  @action
  handleChartChange(event) {
    // Access the selected value from the event
    const selectedValue = event.target.value;

    // Do something with the selected value, such as updating a property
    this.set('chartID', selectedValue);
    console.log(this.chartID);
    this.generateNewChart();
    // You can also perform other actions or logic here
  }
}
