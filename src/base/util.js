/**
 * Created by jcg on 2017/5/15.
 */
export default function (Vue) {
  if (Vue.prototype._UTIL) {
    return;
  }
  Vue.prototype._UTIL = {
    // TODO 网络请求相关封装
    // json类型post请求
    jpost: function (url, body, callback) {
      // appId 请求的来源标识，多系统共用接口时可配置区别或其它业务逻辑使用
      body.appId = 'WEB_FRONT';
      // 用户唯一标识，提交给服务器校验
      var userKey = this.getUserKey();
      if (userKey) {
        body.userKey = userKey;
      }
      Vue.http.post(url, body).then(response => {
        if (response.body.status === 1) {
          callback(response.body.result);
        } else {
          // TODO 服务器验证失败情况处理
        }
      }, response => {
        // TODO 网络请求失败后的处理
      });
    },
    // form类型post请求
    fpost: function (url, body, callback) {
      // appId 请求的来源标识，多系统共用接口时可配置区别或其它业务逻辑使用
      body.appId = 'WEB_FRONT';
      // 用户唯一标识，提交给服务器校验
      var userKey = this.getUserKey();
      if (userKey) {
        body.userKey = userKey;
      }
      // 请求类型设置
      var options = {emulateJSON: true};
      Vue.http.post(url, body, options).then(response => {
        if (response.body.status === 1) {
          callback(response.body.result);
        } else {
          // TODO 服务器验证失败情况处理
        }
      }, response => {
        // TODO 网络请求失败后的处理
      });
    },
    // upload类型post请求
    upost: function (url, body, callback) {
      // appId 请求的来源标识，多系统共用接口时可配置区别或其它业务逻辑使用
      body.appId = 'WEB_FRONT';
      // 用户唯一标识，提交给服务器校验
      var userKey = this.getUserKey();
      if (userKey) {
        body.userKey = userKey;
      }
      Vue.http.post(url, body, {
        progress (event) {
          // TODO 上传进度
        }
      }).then(response => {
        if (response.body.status === 1) {
          callback(response.body.result);
        } else {
          // TODO 服务器验证失败情况处理
        }
      }, response => {
        // TODO 网络请求失败后的处理
      });
    },
    // TODO 工具方法
    btrim: function (str) {
      str = str.replace(/^(\s|\u00A0)+/, '');
      for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
          str = str.substring(0, i + 1);
          break;
        }
      }
      return str;
    },
    buuid: function () {
      var temp = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
      return temp.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    // TODO 存储相关
    setLoginUser: function (user) {
      if (user) {
        this.setObject('login_user_json', user);
        this.setValue('login_user_key', user.userKey);
      }
    },
    getLoginUser: function () {
      var user = this.getObject('login_user_json');
      if (user) {
        return user;
      }
      return null;
    },
    getUserKey: function () {
      return this.getValue('login_user_key');
    },
    signout: function () {
      this.remove('login_user_json');
      this.remove('login_user_key');
    },
    remove: function (key) {
      localStorage.removeItem(key);
    },
    setValue: function (key, value) {
      localStorage.setItem(key, value);
    },
    getValue: function (key) {
      return localStorage.getItem(key);
    },
    setObject: function (key, obj) {
      localStorage.setItem(key, JSON.stringify(obj));
    },
    getObject: function (key) {
      return JSON.parse(localStorage.getItem(key));
    }
  };
};

