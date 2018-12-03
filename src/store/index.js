import Vue from "vue"
import Vuex from "vuex"
import {reqAddress,reqShops,reqFoodCategorys} from "./../api/index.js";
import {reqLoginOut, reqUser,reqGoods,reqInfo,reqRatings} from "./../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    address : "",
    categorys : [],
    shoplist : [],
    user : {},
    info : {},
    goods:[],
    cartFoods:[],
    ratings :[]
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
    },
    changeInfo(state,info){
      state.info = info;
    },
    changeGoods(state,goods){
      state.goods = goods
    },


    updateCount(state,data){
      if(data.flag){
        if(!data.food.count){
          Vue.set(data.food,"count",1);  //给对象新增加属性并纳入数据劫持,响应页面更新
          state.cartFoods.push(data.food)

        }else {
          data.food.count++
        }
      }else if(data.food.count>0){
        data.food.count--;
        if(data.food.count == 0){
          state.cartFoods.splice(state.cartFoods.indexOf(data.food),1)
        }
      }
    },
    clearA(state){
      state.cartFoods.forEach(food => {
        food.count = 0
      });
      state.cartFoods = []
    },
    changeRatings(state,ratings){
      state.ratings = ratings
    }
  },


  getters:{

    totalCount(state){
      return state.cartFoods.reduce((a,food)=>{
        return a + food.count
      },0)
    },

    totalPrice (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
    },

    ratingsUnGood(state){
      return state.ratings.reduce((pre,rating)=>{
        return pre + rating.rateType
      },0)
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
    },

    async reqI({commit}){
      const result = await reqInfo();
      if (result.code==0){
        commit("changeInfo",result.data)
      }
    },

    async reqG({commit},cb){
      const result = await reqGoods();
      if(result.code == 0){
        commit("changeGoods",result.data)
        cb && cb()
      }
    },
    async reqR({commit},cb){
      const result = await reqRatings();
      if (result.code == 0){
        commit("changeRatings",result.data);
        cb && cb()
      }
    }
  }
})
