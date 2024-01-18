import Service from '@ember/service';

export default class ChartInfoConstructorService extends Service {
  countOccurrences(data, propertyName) {
    return data.reduce((acc, item) => {
      const propertyValue = item[propertyName];
      acc[propertyValue] = (acc[propertyValue] || 0) + 1;
      return acc;
    }, {});
  }

  generateBarChartOptions(
    resourceType,
    xAxisLabel,
    yAxisLabel,
    xAxisData,
    yAxisData,
  ) {
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
          type: 'bar',
        },
      ],
    };
  }

  generatePieChartOptions(chartData, resourceName) {
    return {
      xAxis: {
        type: 'category',
        data: [],
        name: '',
      },
      yAxis: {
        type: 'value',
        name: '',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: resourceName,
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: chartData,
        },
      ],
    };
  }
}
