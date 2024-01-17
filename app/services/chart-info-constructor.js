import Service from '@ember/service';

export default class ChartInfoConstructorService extends Service {

  countOccurrences(data, propertyName) {
    return data.reduce((acc, item) => {
      const propertyValue = item[propertyName];
      acc[propertyValue] = (acc[propertyValue] || 0) + 1;
      return acc;
    }, {});
  }

  generateChartOptions(chartType, xAxisLabel, yAxisLabel, xAxisData, yAxisData){
    return {
      xAxis: {
        type: 'category',
        data: xAxisData,
        name: xAxisLabel,
      },
      yAxis: {
        type: 'value',
        name: yAxisLabel,
      },
      series: [
        {
          data: yAxisData,
          type: chartType,
        },
      ],
    };
  }
}
