<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
export default {
  data(){
    return {

    }
  },
  mounted(){
    this.drawLine()
  },
  methods:{
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: [1, 2, 3, 4, 5, 6,7,8,9,10,11]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20,9,55,33,44,22,11,15,61,48]
        }]
      });
      window.onresize = function(){
      myChart.resize()
      // 　　xxxBarChart.resize()
      // 　　xxChart.resize()
      // 　　xxxChart.resize()
      }
    }
  },
}
</script>
<style lang="less" scoped>
  .about{
    font-size: 15px;
  }
</style>