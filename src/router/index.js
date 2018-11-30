import Vue from 'vue'
import Router from 'vue-router'
import msite from "./../pages/Msite/msite.vue";
import order from "./../pages/Order/order.vue";
import profile from "./../pages/Profile/profile.vue";
import search from "./../pages/Search/search.vue";
import login from "./../pages/Login/Login.vue"
import shop from "./../pages/shop/shop.vue"
import goods from "./../pages/shop/goods/goods.vue"
import info from "./../pages/shop/info/info.vue"
import ratings from "./../pages/shop/ratings/ratings.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {path : "/msite", component : msite,meta:{isShow : true}},
    {path : "/order", component : order,meta:{isShow : true}},
    {path : "/profile", component : profile,meta:{isShow : true}},
    {path : "/search", component : search,meta:{isShow : true}},
    {path : "/login", component : login},
    {path : "/", redirect : "/msite"},
    {
      path : "/shop",
      component : shop,
      children : [
        {
          path : 'goods',
          component : goods
        },
        {
          path : 'info',
          component : info
        },
        {
          path : 'ratings',
          component : ratings
        },
        {
          path : "",
          redirect : "/shop/goods"
        }
      ]
    }
  ]
})
