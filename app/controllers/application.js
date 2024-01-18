import Controller from '@ember/controller';
import { service } from '@ember/service';
import {
  RESOURCE_TYPE_TABLE,
  RESOURCE_TYPE_BAR_CHART,
  RESOURCE_TYPE_PIE_CHART,
  CHART_TABLE_MAPPINGS,
} from '../utils/constants';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ApplicationController extends Controller {
  chartsDetails = CHART_TABLE_MAPPINGS;
  @service('chart-info-constructor') chart;
  resourceTypeTable = RESOURCE_TYPE_TABLE;
  @tracked chartID = 2;
  @tracked resourceType = 2;
  @tracked incidents = [];
  @tracked options = {};
  @tracked content = [];
  @tracked rows = [];
  @tracked resourceDescription = '';
  columns = [
    { name: 'datetime', label: 'Datetime' },
    { name: 'severity', label: 'Severity' },
    { name: 'cost', label: 'Cost' },
    { name: 'incidentKind', label: 'Incident Kind' },
    { name: 'jobName', label: 'Job Name' },
    { name: 'foreman', label: 'Foreman' },
    { name: 'description', label: 'Description' },
    { name: 'comment', label: 'Comment' },
  ];
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
    chartMetaDetails = CHART_TABLE_MAPPINGS.find(
      (obj) => obj.id === currentChartId,
    );
    this.resourceType = chartMetaDetails.resourceId;
    switch (this.resourceType) {
      case 1:
        break;
      case RESOURCE_TYPE_BAR_CHART:
        chartData = this.chart.countOccurrences(this.incidents, 'severity');
        this.options = this.chart.generateBarChartOptions(
          chartMetaDetails.resourceType,
          chartMetaDetails.xAxisLabel,
          chartMetaDetails.yAxisLabel,
          Object.keys(chartData),
          Object.values(chartData),
        );
        this.resourceDescription = chartMetaDetails.resourceDescription;
        // console.log(this.options);
        break;
      case RESOURCE_TYPE_PIE_CHART:
        chartData = this.chart.countOccurrences(this.incidents, 'incidentKind');

        chartData = Object.entries(chartData).map(([name, value]) => ({
          name,
          value,
        }));
        this.options = this.chart.generatePieChartOptions(
          chartData,
          chartMetaDetails.resourceName,
        );
        console.log(chartData);
        this.resourceDescription = chartMetaDetails.resourceDescription;
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
