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
          text: '公司电量比例图',
          subtext: '2017年报',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          /* eslint-disable */
          formatter: "{a} <br/>{b} : {c} ({d}%)"
          /* eslint-disable */
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['原有电量', '竞价电量', '中标电量', '未中标电量']
        },
        series: [
          {
            name: '总电量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 300, name: '竞价电量'},
              {value: 200, name: '中标电量', selected: true},
              {value: 100, name: '未中标电量'},
              {value: 900, name: '原有电量'},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
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
