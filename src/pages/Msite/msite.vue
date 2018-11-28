<template>
  <section class="msite">
    <!--首页头部-->
    <TopHeader :title="add"></TopHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="foodListsOne.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food" v-for="(food,index) in foodListsOne" :key="index">
              <div class="food_container">
                <img :src="`https://fuss10.elemecdn.com${food.image_url}`">
              </div>
              <span>{{food.title}}</span>
            </a>
          </div>
          <div class="swiper-slide"> <!--https://fuss10.elemecdn.com-->
            <a href="javascript:" class="link_to_food"  v-for="food in foodListsTwo">
              <div class="food_container">
                <img :src="`https://fuss10.elemecdn.com${food.image_url}`">
              </div>
              <span>{{food.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="loading" v-else>
    </nav>
    <!--首页附近商家-->
    <ShopList></ShopList>
  </section>
</template>

<script>
    import TopHeader from "./../../components/TopHeader/TopHeader.vue";
    import ShopList from "./../../components/ShopList/ShopList.vue";
    import Swiper from "swiper"
    import "swiper/dist/css/swiper.css"
    export default {
        name: "msite",
      computed:{
        add(){
          return this.$store.state.address
        },
        foodListsOne(){
          var arr1 = this.$store.state.categorys;
          var arr2 = arr1.slice(0,8);
          return arr2
        },
        foodListsTwo(){
          var arr1 = this.$store.state.categorys;
          var arr2 = arr1.slice(8,16);
          return arr2
        },
      },
        components: {
          TopHeader,
          ShopList
        },
      mounted(){
        this.$store.dispatch("reqAdd");
        this.$store.dispatch("reqFoodLists")
      },
      watch:{
        foodListsOne(){
          this.$nextTick(()=>{
            new Swiper(".swiper-container",{
              loop : true,
              autoplay: {
                delay:2000,
                disableOnInteraction : false,
              },
              pagination:{
                el : ".swiper-pagination"
              }
            })
          })
        }
      }
    }
</script>

<style scoped lang="stylus">
  @import "./../../common/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
