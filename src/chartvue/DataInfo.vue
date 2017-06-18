<template lang="html">
  <div class="dashboard">
    <div class="flex-container column">
      <div class="item one" @click="clickChart('1')" style="transform: translate(-32.4%,-33.5%) scale(0.33)">
        <growthRatioChart class="chartInfo"></growthRatioChart>
      </div>
      <div class="item two" @click="clickChart('2')" style="transform: translate(-32.4%,0.5%) scale(0.33)">
        <yiBiaoChart class="chartInfo"></yiBiaoChart>

      </div>
      <div class="item three" @click="clickChart('3')" style="transform: translate(-32.4%,34.5%) scale(0.33)">
        <flowChart class="chartInfo"></flowChart>
      </div>
      <div class=" item four active" @click="clickChart('4')" style="transform: translate(33.7%, 0) scale(1)">
        <contrastChart class="chartInfo"></contrastChart>
      </div>
    </div>
  </div>
</template>

<script>
  import yiBiaoChart from './YiBiaoChart.vue';
  import flowChart from './FlowChart.vue';
  import contrastChart from './ContrastChart.vue';
  import growthRatioChart from './GrowthRatioChart.vue';
  export default {
    data () {
      return {
        items: []
      };
    },
    mounted () {
      this._init();
    },
    methods: {
      _resize () {
        // this.$root.charts.forEach((myChart) => {
        //  myChart.resize();
        // });
      },
      _init () {
        this.items = document.querySelectorAll('.flex-container .item');
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].dataset.order = i + 1;
        }
      },
      clickChart (clickIndex) {
        let activeItem = document.querySelector('.flex-container .active');
        let activeIndex = activeItem.dataset.order;
        let clickItem = this.items[clickIndex - 1];
        if (activeIndex === clickIndex) {
          return;
        }
        activeItem.classList.remove('active');
        clickItem.classList.add('active');
        this._setStyle(clickItem, activeItem);
      },
      _setStyle (el1, el2) {
        let transform1 = el1.style.transform;
        let transform2 = el2.style.transform;
        el1.style.transform = transform2;
        el2.style.transform = transform1;
      }
    },
    components: {
      flowChart,
      contrastChart,
      growthRatioChart,
      yiBiaoChart
    }
  };

</script>
<style>
  .chartInfo {
    height: 100% !important;
    width: 100% !important;
    background: none !important;
  }

  .item {
    padding: 0px;
    margin: 0px;
    width: 73%;
    height: 100%;
    position: absolute;
    /*transform: scale(0.33);*/
    text-align: center;
    transition: all 0.8s;
    /*background: rgba(32, 32, 35, 0.5);*/
  }

  .dashboard {
    margin: 0px;
    background-size: 100%;
  }

  .flex-container.column {
    position: relative;
    height: 90%;
    width: 100%;
    overflow: hidden;
    margin: 0 auto 100px auto;
    box-sizing: content-box;
  }

  .active {
    height: 100%;
    width: 74%;
    margin-left: 10px;
    line-height: 300px;
  }
</style>
