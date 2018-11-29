<template>
  <header class="msite_header">
    <span class="header_search" @click="$router.push('/search')" v-show="$route.path == '/msite'" >
      <i class="iconfont icon-sousuo"></i>
    </span>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <span class="header_login" v-show="$route.path == '/msite'">
      <span class="header_login_text" @click="!$store.state.user._id ? $router.push('/login') : $router.push('/profile')">{{this.$store.state.user._id ? "已登录" : "登录|注册"}}</span>
    </span>
  </header>
</template>

<script>
    export default {
        name: "TopHeader",
        props:["title"]
    }
</script>

<style scoped lang="stylus">
  .msite_header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff

</style>
