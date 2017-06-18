<template>
  <div id="demo">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="item in menuList" @click="changePage(item)" :key="item.id" :index="item.seq">{{item.name}}
      </el-menu-item>
    </el-menu>
    <compontent :is="view"></compontent>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    data () {
      return {
        view: 'login',
        menuList: [{id: 'menu-login', name: '登录展示', url: '#/demo/login', seq: '1'}, {
          id: 'menu-list',
          name: '列表展示',
          url: '#/demo/list',
          seq: '2'
        },
          {id: 'menu-obj', name: '对象展示', url: '#/demo/obj', seq: '3'}, {
            id: 'menu-createData',
            name: '数据创建',
            url: '#/demo/create',
            seq: '4'
          },
          {id: 'menu-testChart', name: '其它功能', url: '#/demo/testChart', seq: '5'}],
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    created: function () {
      // TODO 页面加载做事
    },
    components: {
      login: require('./demovue/Login.vue'),
      list: require('./demovue/List.vue'),
      obj: require('./demovue/Obj.vue'),
      createData: require('./demovue/Create.vue'),
      testChart: require('./chartvue/TestChart.vue')
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
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
            self._UTIL.setLoginUser(data.user);
          }
        });
        this._UTIL.jpost(this._API.user.login, this.userLoginData, function (data) {
          if (data.status === 1) {
            self._UTIL.setLoginUser(data.user);
          }
        });
      }
    }
  };
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
