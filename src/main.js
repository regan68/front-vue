// The Vue build version to load with the `import` command
import Vue from 'vue';
import App from './App';
import router from './router';
import Resource from 'vue-resource';
import IEcharts from 'vue-echarts-v3/src/full.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Api from './base/api.js';
import Util from './base/util.js';
// 使用外部插件库使用
Vue.use(ElementUI);
Vue.use(Resource);
Vue.use(IEcharts);
// 全局属性定义，可添加变量或请求字典
Vue.prototype._API = Api;
// 使用自定义插件库使用
Vue.use(Util);
// TODO 项目
// Vue.url.options.root = 'http://api.1school.com.cn:9080/school-read'
Vue.url.options.root = 'school-read';
// 提示是否开启提示
Vue.config.productionTip = false;
// 拦截器
Vue.http.interceptors.push(function (request, next) {
  // TODO 请求出口处理
  next(function (response) {
    // TODO 处理网络异常情况统一或添加其它特殊标识
  });
});
// 创建全局实例,下面一行不能去掉
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
