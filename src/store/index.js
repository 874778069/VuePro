import Vue from "vue"
import Vuex from "vuex"
import {reqAddress,reqShops,reqFoodCategorys} from "./../api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    address : "",
    categorys : [],
    shoplist : [],
  },
  mutations:{
    changeAddress(state,Add){
      state.address = Add
    },
    changeShopList(state,arr){
      state.shoplist = arr
    },
    changeCategorys(state,arr){
      state.categorys = arr
    }
  },
  actions:{
    async reqAdd($store){
      const result = await reqAddress(116.36867,40.10038);
      if(result.code == 0){
        $store.commit("changeAddress",result.data.address)
      }
    },
    async reqShopList({commit}){
      const result = await reqShops(116.36867,40.10038);
      if(result.code == 0 ){
        commit("changeShopList",result.data)
      }
    },
    async reqFoodLists({commit}){
      const result = await reqFoodCategorys();
      if (result.code == 0){
        commit("changeCategorys",result.data)
      }
    }
  }
})
