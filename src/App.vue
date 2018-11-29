<template>
  <div id="app">
    <router-view/>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
export default {
  name: 'App',
  components : {
    FooterGuide
  },
  mounted(){
    this.$store.dispatch("reqAdd");
    this.$store.dispatch("reqU")

  }
}
</script>

<style>

</style>
