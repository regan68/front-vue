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
          text: '工作日用电量分布',
          subtext: '2017年平均',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:30', '10:00', '11:15', '12:30', '13:30',
            '15:00', '16:15', '17:30', '18:30', '20:00', '21:30', '22:30', '23:45']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} kw.h'
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [{
            lte: 7,
            color: 'green'
          }, {
            gt: 7,
            lte: 17,
            color: 'red'
          }, {
            gt: 17,
            color: 'green'
          }]
        },
        series: [
          {
            name: '用电量',
            type: 'line',
            smooth: true,
            data: [200, 280, 250, 260, 270, 300, 350, 550, 700, 750, 780, 650, 700, 750, 770, 680, 800, 700, 500, 300],
            markArea: {
              data: [[{
                name: '生产期间',
                xAxis: '08:30'
              }, {
                xAxis: '21:30'
              }]]
            }
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
