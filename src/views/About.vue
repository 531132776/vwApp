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
      data: [5, 20, 36, 10, 10, 20,9,55,33,44,22,11,15,61,75,
      31,52,36,60,88,55,99,33,22,11,22,44,
        60,88,55,99,33,22,11,22,44,31,52,36,60,88,
        52,36,60,88,55,99,33,22,11,22,44,36, 10, 10, 20,9,55,33,44,22,11,15,61,75,
      31,52,36,60,88,55,99,60,88,55,99,33,22,11,22,44,31,52,36,60,88,
        52,36,60,88,55,99,33,22,11,22,44,20, 36, 10, 10, 20,9,55,33,44,22,11,15,61,75,
      31,52,36,60,88,10, 20,9,55,33,44,22,11,15,61,75,55,99,33,22,11,22,44,36, 10, 10,
      5, 20, 36, 10, 10, 20,9,55,33,44,22,11,15,61,75,
      31,52,36,60,88,55,99,33,22,11,22,44,
        60,88,55,99,33,22,11,22,44,31,52,36,60,88,
        52,36,60,88,55,99,33,22,11,22,44,36, 10, 10, 20,9,55,33,44,22,11,15,61,75,
      31,52,36,60,88,52,36,60,88,55,99,33,22,11,22,44,36, 10, 10, 20,9,55,33,44,22,11,15,61,75,
      31,52,36,60,88,55,99,60,88,55,99,33,22,11,22,44,31,52,36,60,88,
        52,36,60,88,55,99,33,22,11,22,44,20, 36, 10, 10, 20,9,55,33,44,22,11,15,61,75,120,
      31,52,36,],
      lists:[]
    }
  },
  mounted(){
    this.data.map((v,i) =>{
      // console.log(v,i)
      this.lists.push(i+1)
    })
    // console.log(this.lists,'}}}}')
    this.drawLine();
  },
  methods:{
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        // tooltip: {},
        
        xAxis: {
          
          data: this.lists,
          axisLabel:{
            formatter: '{value} min'
          },
          axisTick:{       //y轴刻度线
            show:false
          },
          lineStyle:{
            width:0
          }
        },
        yAxis: {
          axisLine:{
            show:false,
          },
          
          type:'value',
          axisLabel:{
            formatter: '{value} %'
          },
          
          axisTick:{       //y轴刻度线
            show:false
          },
          splitLine:{
              show:true,
              lineStyle:{
                  type:'dashed'
              }
          }
          // data:[0,60,70,80,90,100,120]
        },
        series: [{
          // name: '销量',
          type: 'bar',
          data: this.data,
          
          barMinHeight:0,
          barMaxHeight:100,
          itemStyle:{
            normal:{
              barWidth : function(val){
            console.log(val)
          },
              color:function(v){
                // console.log(v)

                if(v.value>=0 && v.value<=49){
                  return '#BDC1C7'
                }
                else if(v.value>49 && v.value<=59){
                  return '#9399A5'
                }
                else if(v.value>59 && v.value<=69){
                  return '#3FA6F2'
                }
                else if(v.value>69 && v.value<=79){
                  return '#14D36B'
                }
                else if(v.value>79 && v.value<=89){
                  return '#FFCB14'
                }
                else if(v.value>=90){
                  return '#F85842'
                }
              }
            }
          }
        }],
        dataZoom: [
            {
                type: 'slider',
                show: false,
                start: 34,
                end: 100,
                handleSize: 8
            },
            {
                type: 'inside',
                start: 34,
                end: 100
            },
            // {
            //     type: 'slider',
            //     show: true,
            //     yAxisIndex: 0,
            //     filterMode: 'empty',
            //     height: '70%',
            //     handleSize: 8,
            //     showDataShadow: false,
            //     left: '93%'
            // }
        ],
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