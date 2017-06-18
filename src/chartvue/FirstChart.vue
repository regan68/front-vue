<template>
  <div>
    <IEcharts :option="myOption" theme="dark" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
  </div>
</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/full.vue';
  import 'echarts/theme/dark.js';
  export default {
    name: 'view',
    components: {
      IEcharts
    },
    props: {},
    data: () => ({
      myChart: null,
      echarts: null,
      loading: true,
      dataAxis: [],
      myData: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220],
      yMax: 500,
      dataShadow: [],
      myOption: {
        title: {
          text: '特性示例：渐变色 阴影 点击缩放',
          subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          /* eslint-disable */
          formatter: "{a} <br/>{b}: {c}"
          /* eslint-disable */
        },
        xAxis: {
          name: 'x坐标向量',
          nameLocation: 'middle',
          nameGap: 25,
          data: [],
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          { // For shadow
            type: 'bar',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0.05)'
              }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: [],
            animation: false
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: null
              },
              emphasis: {
                color: null
              }
            },
            data: []
          }
        ]
      }
    }),
    created: function () {
      for (var i = 0; i < this.myData.length; i++) {
        this.dataShadow.push(this.yMax);
      }
      for (var i = 1; i <= 20; i++) {
        this.dataAxis.push(i*100);
      }
      this.myOption.xAxis.data = this.dataAxis;
      this.myOption.series[0].data = this.dataShadow;
      this.myOption.series[1].data = this.myData;
    },
    methods: {
      chartInit () {

      },
      onReady (instance, echarts) {
        const that = this;
        that.loading = false;
        that.myChart = instance;
        that.echarts = echarts;
//        that.myChart.registerTheme('dark');
        that.myOption.series[1].itemStyle.normal.color = new that.echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            {offset: 0, color: '#83bff6'},
            {offset: 0.5, color: '#188df0'},
            {offset: 1, color: '#188df0'}
          ]
        );
        that.myOption.series[1].itemStyle.emphasis.color = new that.echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            {offset: 0, color: '#2378f7'},
            {offset: 0.7, color: '#2378f7'},
            {offset: 1, color: '#83bff6'}
          ]
        );
//        var zoomSize = 6;
//        that.myChart.on('click', function (params) {
//          console.log(that.dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//          console.log(that.dataAxis[Math.min(params.dataIndex + zoomSize / 2, that.myData.length - 1)]);
//          that.myChart.dispatchAction({
//            type: 'dataZoom',
//            startValue: that.dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//            endValue: that.dataAxis[Math.min(params.dataIndex + zoomSize / 2, that.myData.length - 1)]
//          });
//        });
      },
      onClick (event, instance, echarts) {
        console.log(arguments);
      }
    }
  };
</script>

<style>

</style>
