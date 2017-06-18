<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">{{isLogin?'登录成功':'登录演示'}}</span>
      </div>
      <div class="loginShow" v-if="!isLogin">
        <el-input v-model="userLoginData.account" size="large" placeholder="用户名" style="margin-top: 30px"></el-input>
        <el-input type="password" v-model="userLoginData.password" size="large" placeholder="密码"
                  style="margin-top: 30px"></el-input>
        <el-button type="primary" @click="login()" style="margin-top: 30px">登录</el-button>
        <el-button type="primary" style="margin-top: 30px">注册</el-button>
      </div>
      <div class="loginShow" v-if="isLogin">
        <div style="float: left; width: 200px">
          <img src="https://yxyspbase.1school.com.cn/who6" class="image">
        </div>
        <div style="float: left; width: 230px; margin-left: 10px">
          <div style="text-align: left">姓名：{{user.name}}</div>
          <div style="text-align: left">账号：{{user.email}}</div>
          <div style="text-align: left; margin-top: 120px">
            <el-button type="warning" @click="signout">登出</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        isLogin: false,
        userLoginData: {account: 't01@test.com', password: '111111'},

        user: []
      };
    },
    created: function () {
      // TODO 如果已经登录
      this.loginCheck();
      // TODO 如果没有登录
    },
    methods: {
      signout () {
        this._UTIL.signout();
        this.isLogin = false;
        this.user = null;
      },
      loginCheck () {
        var self = this;
        this._UTIL.fpost(this._API.user.loginCheck, {}, function (data) {
          if (data) {
            var user = self._UTIL.getLoginUser();
            if (user) {
              self.isLogin = true;
              self.user = user;
            }
          }
        });
      },
      login () {
        var self = this;
        this._UTIL.fpost(this._API.user.login, this.userLoginData, function (data) {
          if (data.status === 1) {
            self._UTIL.setLoginUser(data.user);
            self.user = data.user;
            self.isLogin = true;
          }
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .login {
    position: absolute;
    left: 50%;
    margin-top: 30px;
    margin-left: -240px;
    font-size: 16px;
    text-align: center;
    display: block;
  }

  .loginShow {
    height: 250px;
  }
</style>
