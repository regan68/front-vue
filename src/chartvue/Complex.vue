<template lang="html">
  <div class="dashboard2">
    <chart1 class="item2" style="width: 49.5%;  height: 45%;">
    </chart1>
    <chart2 class="item2" style="width: 49.5%;  height: 45%;">
    </chart2>
    <chart3 class="item2" style="width: 99.5%; height: 54%;">
    </chart3>
  </div>
</template>

<script>
  import growthRatioChart from './GrowthRatioChart.vue';
  import chart1 from './AChart1.vue';
  import chart2 from './AChart2.vue';
  import chart3 from './AChart3.vue';
  export default {
    data () {
      return {
        items: []
      };
    },
    mounted () {
    },
    components: {
      chart1,
      chart2,
      chart3,
      growthRatioChart
    },
    methods: {
      clickChart (clickIndex) {
      }
    }
  };
</script>
<style>
  .item2 {
    float: left;
    padding: 0px;
    position: relative;
    text-align: center;
    margin-left: 0.5%;
    margin-top: 0.5%;
  }

  .dashboard2 {
    /*position: relative;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*margin: 0px;*/
    /*background-size: 100%;*/
    /*overflow: hidden;*/
    /*margin: 0 auto 100px auto;*/
    /*box-sizing: content-box;*/
  }

  .flex-container2.column2 {
    position: relative;
    height: 90%;
    width: 100%;
    overflow: hidden;
    margin: 0 auto 100px auto;
    box-sizing: content-box;
  }

  .active2 {
    height: 100%;
    width: 74%;
    margin-left: 10px;
    line-height: 300px;
  }
</style>
