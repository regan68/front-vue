<template>
  <div class="menu-main">
    <el-row class="menu-main" style="height: 6%">
      <el-col :span="3">
        <img class="logocss" src="../assets/img/logo.png">
      </el-col>
      <el-col :span="21">
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item style="float: right" index="1">工单</el-menu-item>
          <el-menu-item style="float: right" index="2">XXX 欢迎您！</el-menu-item>
          <el-submenu style="float: right" index="3">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item style="float: right" index="4">订单</el-menu-item>
          <el-menu-item style="float: right" index="5">提醒</el-menu-item>
          <div style="font-size: 20px" index="3">LOGO</div>
        </el-menu>
      </el-col>
    </el-row>
    <el-row class="menu-main" style="height: 94%">
      <el-col :span="3" class="menu-main">
        <el-menu default-active="1" class="el-menu-vertical-demo" style="height: 100%;"
                 @open="handleOpen" @close="handleClose" @select="handleSelect">
          <div class="item-header item-show" style="font-size: 24px">数据中心</div>
          <hr class="line-mod">
          <el-menu-item index="1" class="item-show" style="font-size: 16px">
            <i class="el-icon-caret-right"></i>概述
          </el-menu-item>
          <el-menu-item index="2" class="item-show" style="font-size: 16px">
            <i class="el-icon-caret-right"></i>网络覆盖
          </el-menu-item>
          <el-menu-item index="3" class="item-show" style="font-size: 16px">
            <i class="el-icon-caret-right"></i>区间用量
          </el-menu-item>
          <el-menu-item index="4" class="item-show" style="font-size: 16px">
            <i class="el-icon-caret-right"></i>趋势预测
          </el-menu-item>
        </el-menu>
      </el-col>
       <el-col :span="21" class="menu-main">
           <component :is="view" class="chartShow"></component>
       </el-col>
    </el-row>
  </div>
</template>
<script>
  import energyDistribution from '../chartvue/EnergyDistribution.vue';
  import dataInfo from '../chartvue/DataInfo.vue';
  import firstChart from '../chartvue/FirstChart.vue';
  import complex from '../chartvue/Complex.vue';
  export default {
    data () {
      return {
        view: 'complex',
        activeIndex: '1'
      };
    },
    components: {
      dataInfo,
      energyDistribution,
      firstChart,
      complex
    },
    methods: {
      handleSelect (key, keyPath) {
        if (key === '1') {
          this.view = 'complex';
        }
        if (key === '2') {
          this.view = 'dataInfo';
        }
        if (key === '3') {
          this.view = 'firstChart';
        }
        if (key === '4') {
          this.view = 'energyDistribution';
        }
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
<style>

  .top-menu{
    position: fixed;
    top:0px;
    left:0px;
    width: 100%;
    z-index: 30;
  }
  .left-menu{
    position: fixed;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: 10;
    padding-top: 60px;
  }
  .body{
    z-index:0;
    padding-top: 60px;
    padding-left: 150px;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .chartShow {
    height:100%!important;
    width:100%!important;
    background:none!important;
    /*padding: 1px;*/
  }
  .logocss {
    width:100%;
    height:60px;
    list-style: none;
    position: relative;
    float: left;
    background-color: #324157;
  }

  .menu-main {
    position: relative;
    height: 100%;
  }

  .line-mod {
    width: 156px;
    height: 0;
    margin: 0 auto 15px;
    border: none;
    border-top: 1px solid #cadbe6;
    border-bottom: 1px solid #f8fbfb;
  }

  .item-header {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #48576a;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    transition: border-color .3s, background-color .3s, color .3s;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .item-show {
    font-weight: 700;
    font-size: 18px;
    text-align: left;
  }
  .chartDiv {
    width: 100%;
    height: 100%;
  }
</style>
