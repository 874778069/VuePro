<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul ref="leftU">
          <!--current-->
          <li class="menu-item" v-for="(good,index) in goods" :class="{current:currentIndex == index}" @click="toList(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>

      <div class="foods-wrapper">
        <ul ref="rightS">
          <li class="food-list-hook" v-for="good in goods">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="food in good.foods" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57"
                       :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售 {{food.sellCount}} 份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>

                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCard></ShopCard>
    </div>
    <Food ref="food" :food="food"></Food>
  </div>
</template>

<script>
    import {mapState} from "vuex"
    import BS from "better-scroll"
    import CartControl from "./../../../components/CartControl/CartControl.vue"
    import Food from "./../../../components/Food/food.vue"
    import ShopCard from "./../../../components/ShopCard/ShopCard.vue"
    export default {
      name: "goods",
      data(){
        return{
          food:{},
          SY : 0 , //右边的滑动值
          tops : []
        }
      },
      computed:{
        ...mapState(["goods"]),
        currentIndex(){

          var {tops,SY} = this;
          const index = tops.findIndex((top,index)=>{
            return top <= SY && SY < tops[index+1]
          });

          if(index!==this.index && this.leftUl) {
            this.index = index
            this.leftUl.scrollToElement(this.$refs.leftU.children[index], 300)
          }

          return index
        }
      },
      components:{
        CartControl,
        Food,
        ShopCard
      },
      mounted(){
        this.$store.dispatch("reqG",()=>{
          this.$nextTick(()=>{
            this.leftUl = new BS(".menu-wrapper",{click:true});
            //更新SY值
            this.rightUl = new BS(".foods-wrapper",{
              click:true,
              probeType: 1,
            });
            this.rightUl.on("scroll",({y})=>{
              this.SY = Math.abs(y)
            });
            this.rightUl.on("scrollEnd",({y})=>{
              this.SY = Math.abs(y);
            });



            //更新tops值
            var top = 0;
            var tops = [];
            tops.push(top);
            var lis = this.$refs.rightS.querySelectorAll(".food-list-hook");
            lis.forEach((li)=>{
              top += li.clientHeight;
              tops.push(top)
            });
            this.tops = tops;


          })
        })
      },
      methods:{
          showFood(food){
            this.food = food;
            this.$refs.food.isShowFood()
          },
        toList(index){
          this.rightUl.scrollToElement(this.$refs.rightS.children[index],400)

          // // 计算目标位置的坐标
          // const y = this.tops[index]
          // // 立即更新scrollY为目标坐标
          // this.scrollY = y;
          // // 让右侧滑动到对应的位置
          // this.rightUl.scrollTo(0, -y, 300)

        }
      }
    }
</script>

<style scoped lang="stylus">

  @import "../../../common/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>



