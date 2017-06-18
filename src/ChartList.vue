<template>
  <div id="chart">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="item in menuList" @click="changePage(item)" :key="item.id" :index="item.seq">{{item.name}}
      </el-menu-item>
    </el-menu>
    <compontent :is="view"></compontent>
  </div>
</template>

<script>
  export default {
    name: 'chart',
    data () {
      return {
        view: 'login',
        chartList: []
      };
    },
    created: function () {
      // TODO 页面加载做事
    },
    components: {

    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      changePage (menu) {
        this.view = menu.id.substr(5);
        // window.location.href = menu.url
      },
      myword (message) {
        var self = this;
        // this.msg = this._UTIL.buuid()
        // this._CACHE.setLoginUser({name: 'aaa'})
        // this.msg = this._CACHE.getLoginUser().name
        this._UTIL.fpost(this._API.user.login, this.userLoginData, function (data) {
          if (data.status === 1) {
            self._UTIL.setLoginUser(data.user)
          }
        });
        this._UTIL.jpost(this._API.user.login, this.userLoginData, function (data) {
          if (data.status === 1) {
            self._UTIL.setLoginUser(data.user)
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
