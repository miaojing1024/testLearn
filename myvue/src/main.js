import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css'
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
Vue.use(Vant);
Vue.use(ElementUI);
import { Lazyload,Image as VanImage } from 'vant';
Vue.use(Lazyload);
import "@/views/flexible.js";
Vue.use(VanImage);


Vue.config.productionTip = false
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
