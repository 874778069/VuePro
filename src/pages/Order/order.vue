<template>
  <div>
    <TopHeader :title="'订单列表'"></TopHeader>
    <div>
      <section class="order">
        <header class="header">
          <a class="header_title">
            <span class="header_title_text">订单列表</span>
          </a>
        </header>
        <section class="order_no_login">
          <img src="./images/order/person.png">
          <h3>登录后查看外卖订单</h3>
          <button @click="!$store.state.user._id ? $router.push('/login') : $router.push('/profile')">{{this.$store.state.user._id ? "已登录" : "立即登录"}}</button>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  import TopHeader from "./../../components/TopHeader/TopHeader.vue"
    export default {
        name: "order",
      components: {
          TopHeader,
      }
    }
</script>

<style scoped lang="stylus">
  .order  //订单
    width 100%
    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >button
        display inline-block
        background #02a774
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px

</style>
