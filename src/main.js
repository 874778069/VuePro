// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index.js"
import {Button} from 'mint-ui'
import "./mock/mockServer.js"
import split from "./components/split/split.vue"
import loading from "./common/timg.gif";
import VueLazyload from "vue-lazyload"


Vue.config.productionTip = false;
Vue.component(Button.name, Button); // <mt-button/>
Vue.component("Split", split);

Vue.use(VueLazyload,{
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//每个组件都有一个$router属性
  store, //每个组件都有一个$store属性
  components: { App },
  template: '<App/>'
});
