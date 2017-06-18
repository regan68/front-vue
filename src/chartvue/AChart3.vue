<template>
  <div>
    <IEcharts :option="myOption" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
  </div>
</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/full.vue';
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
      myOption: {
        title: {
          text: '公司用电量收益比',
          subtext: '2017年报',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          // orient: 'vertical',
          padding: 20,
          left: 'left',
          data: ['产量收益', '购电量比']
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '背景',
            type: 'bar',
            itemStyle: {
              normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barWidth: '35%',
            barGap: '-100%',
            animation: false,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
          },
          {
            name: '产量收益',
            type: 'bar',
            itemStyle: {
              normal: {color: '#d48265'}
            },
            barWidth: '35%',
            data: [60, 70, 50, 80, 75, 85, 80, 65, 70, 80, 70, 75]
          },
          {
            name: '购电量比',
            type: 'line',
            data: [33, 40, 30, 45, 42, 50, 46, 35, 38, 43, 37, 35]
          }
        ]
      }
    }),
    created: function () {

    },
    methods: {
      chartInit () {

      },
      onReady (instance, echarts) {
        const that = this;
        that.loading = false;
        that.myChart = instance;
        that.echarts = echarts;
      },
      onClick (event, instance, echarts) {
        console.log(arguments);
      }
    }
  };
</script>

<style>

</style>
