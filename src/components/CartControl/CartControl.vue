<template>
  <div class="cartcontrol">

      <transition name="move">
        <div class="iconfont icon-remove_circle_outline" v-show="food.count" @click.stop="updateC(false)"></div>
      </transition>

    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateC(true)"></div>
  </div>
</template>

<script>
    export default {
      props:["food"],
      name: "CartControl",
      methods:{
          updateC(flag){
            this.$store.commit("updateCount",{food:this.food,flag})
          }
      }

    }
</script>

<style scoped lang="stylus">
  @import "../../common/mixins.styl"
  .cartcontrol
    font-size: 0

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(20px) rotate(180deg)

    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>



