import Vue from 'vue'
import Router from 'vue-router'
import msite from "./../pages/Msite/msite.vue";
import order from "./../pages/Order/order.vue";
import profile from "./../pages/Profile/profile.vue";
import search from "./../pages/Search/search.vue";
import login from "./../pages/Login/Login.vue"


Vue.use(Router);

export default new Router({
  routes: [
    {path : "/msite", component : msite},
    {path : "/order", component : order},
    {path : "/profile", component : profile},
    {path : "/search", component : search},
    {path : "/login", component : login},
    {path : "/", redirect : "/msite"}
  ]
})
