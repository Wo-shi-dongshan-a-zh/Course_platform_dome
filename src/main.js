import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import {findAllMenus} from "./config/menu";
import de from "element-ui/src/locale/lang/de";

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)

router.beforeEach((to,from,next)=> {
  if(to.path.startsWith("/public"))//用public开头作为地址，代表为公共用户，不需要登陆验证
  {
    next();
  }
  else if(to.path === '/login'||to.path==='/') {
    next();
  } else{
    if (window.sessionStorage.getItem("user")) {
      findAllMenus(router,store)
      next();
    } else {
      next('/login');
    }
  }
})
router.afterEach((to, from, next) => {//每次切换网页回到顶层
  window.scrollTo(0, 0)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
