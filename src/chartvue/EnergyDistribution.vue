<template>
  <div>
    <IEcharts :option="myOption" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
  </div>
</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/full.vue';
  import baseData from './ed.js';
  import 'echarts/map/js/china.js';
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
      myData1: [],
      myData2: [],
      myOption: {
        backgroundColor: '#404a59',
        title: {
          text: '全国主要城市能源网络',
          subtext: '数据分析',
          sublink: 'http://www.pm25.in',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['pm2.5'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: [
          {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [],
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 1
          }
        ]
      }
    }),
    created: function () {
      // 初始化图表
      this.chartInit();
    },
    methods: {
      chartInit () {
        this.myData1 = this.convertData(baseData.data);
        this.myData2 = baseData.data.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 6);
        this.myData2 = this.convertData(this.myData2);
        this.myOption.series[0].data = this.myData1;
        this.myOption.series[1].data = this.myData2;
      },
      onReady (instance, echarts) {
        const that = this;
        that.loading = false;
        that.myChart = instance;
        that.echarts = echarts;
      },
      onClick (event, instance, echarts) {
        console.log(arguments);
      },
      convertData (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = baseData.geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      }
    }
  };
</script>

<style>

</style>
