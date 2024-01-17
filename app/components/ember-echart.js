// app/components/echarts-chart.js
import Component from '@ember/component';
import echarts from 'echarts';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    const dom = document.getElementById('echart');
    const myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false,
    });
    myChart.setOption(this.options);
  },
});
