<template>
  <div class="list">
    <el-row class="conetntPage">
      <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 0" class="conetnt">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="'https://yxyspbase.1school.com.cn/who'+Math.floor(Math.random()*10+1)" class="image">
          <div style="padding: 14px;">
            <span>内容{{o}}</span>
            <div class="bottom clearfix">
              <time class="time">2017年5月10日</time>
              <el-button type="text" class="button">操作按钮</el-button>
              <el-badge :value="Math.floor(Math.random()*100+1)" :max="99" class="item">
                <el-button size="small">评论</el-button>
              </el-badge>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        currentDate: new Date(),
        content: {}
      };
    },
    methods: {
      showTip () {

      }
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .conetntPage {
    position: absolute;
    left: 50%;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: -450px;
    width: 900px;
  }

  .conetnt {
    float: left;
    margin-top: -10px;
    margin-left: 10px;
    margin-right: 10px;
    width: 200px;
    height: 350px;
  }

  .item {
    float: left;
    margin-top: 10px;
    margin-right: 0px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
