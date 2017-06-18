<template>
  <div>
    <IEcharts :option="myOption" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
    <button @click="doRandom">Random</button>
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
      symbolSize: 20,
      myData: [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]],
      myOption: {
        title: {
          text: 'Try Dragging these Points'
        },
        tooltip: {
          triggerOn: 'none',
          formatter: function (params) {
            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
          }
        },
        grid: {},
        xAxis: {
          min: -100,
          max: 80,
          type: 'value',
          axisLine: {onZero: false}
        },
        yAxis: {
          min: -30,
          max: 60,
          type: 'value',
          axisLine: {onZero: false}
        },
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty'
          }
        ],
        series: [
          {
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: 20,
            itemStyle: {
              normal: {
                // 阴影的大小
                shadowBlur: 200,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: []

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
        this.myOption.series[0].data = this.myData;
        this.myOption.series[0].symbolSize = this.symbolSize;
      },
      doRandom () {
//        const that = this;
//        let data = [];
//        for (let i = 0, min = 5, max = 99; i < 6; i++) {
//          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
//        }
//        that.loading = !that.loading;
//        that.bar.series[0].data = data;
      },
      onReady (instance, echarts) {
        const that = this;
        that.loading = false;
        that.myChart = instance;
        that.echarts = echarts;
        // console.log(instance);
        setTimeout(function () {
          // Add shadow circles (which is not visible) to enable drag.
          instance.setOption({
            graphic: that.echarts.util.map(that.myData, function (item, dataIndex) {
              return {
                type: 'circle',
                position: instance.convertToPixel('grid', item),
                shape: {
                  cx: 0,
                  cy: 0,
                  r: that.symbolSize / 2
                },
                invisible: true,
                draggable: true,
                ondrag: echarts.util.curry(function (dataIndex, dx, dy) {
                  that.myData[dataIndex] = that.myChart.convertFromPixel('grid', this.position);
                    // Update data
                  that.myChart.setOption({
                    series: [{
                      id: 'a',
                      data: that.myData
                    }]
                  });
                },
                  dataIndex),
                onmousemove: echarts.util.curry(that.showTooltip, dataIndex),
                onmouseout: echarts.util.curry(that.hideTooltip, dataIndex),
                z: 100
              };
            })
          });
        }, 0);
//        window.addEventListener('resize', that.updatePosition);
//        that.myChart.on('dataZoom', that.updatePosition);
      },
      onClick (event, instance, echarts) {
        console.log(arguments);
      },
      updatePosition () {
        const that = this;
        that.myChart.setOption({
          graphic: that.echarts.util.map(that.myData, function (item, dataIndex) {
            return {
              position: that.myChart.convertToPixel('grid', item)
            };
          })
        });
      },
      showTooltip (dataIndex) {
        const that = this;
        that.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: dataIndex
        });
      },
      hideTooltip (dataIndex) {
        const that = this;
        that.myChart.dispatchAction({
          type: 'hideTip'
        });
      },
      onPointDragging: function (dataIndex, dx, dy) {
        const that = this;
        that.myData[dataIndex] = that.myChart.convertFromPixel('grid', this.position);
        // Update data
        that.myChart.setOption({
          series: [{
            id: 'a',
            data: that.myData
          }]
        });
      }
    }
  };
</script>

<style>

</style>
