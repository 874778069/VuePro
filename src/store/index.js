import Vue from "vue"
import Vuex from "vuex"
import {reqAddress,reqShops,reqFoodCategorys} from "./../api/index.js";
import {reqLoginOut, reqUser} from "./../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    address : "",
    categorys : [],
    shoplist : [],
    user : {}
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
    },
    changeUser(state,user){
      state.user = user
    },
    saveUser2(state,user){
      state.user = user
    },
    dUser(state){
      state.user = {}
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
    },

    saveUser({commit},user){
      commit("changeUser",user)
    },

    async reqU({commit}){
      const result = await reqUser();
      if(result.code == 0){
        commit("saveUser2",result.data)
      }
    },
    async reqLO({commit}){
      const result = await reqLoginOut();
      if (result.code == 0){
        commit("dUser")
      }
    }
  }
})
