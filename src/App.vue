<template>
  <div id="app">
    <div :class="{'nav-btn':true,'nav-btn-open':openNav,'nav-btn-close':closeNav}"  @click="switchNav"></div>
    <div :class="{'nav':true,'nav-open':openNav,'nav-close': closeNav}" >
      <ul class="menu">
        <router-link to="/" tag="li">Home</router-link>
        <router-link to="/bolg" tag="li">Bolg</router-link>
        <router-link to="/about" tag="li">About</router-link>
        <router-link to="/game" tag="li">Game</router-link>
      </ul>
    </div>
      <div class="content">
      <router-view/>
      </div>
  </div>
</template>
<script>
 
export default {
  data(){
    return{
      openNav:false,
      closeNav:false
    }
  },
 
  methods:{
    switchNav(){
      this.closeNav = this.openNav;
      this.openNav = !this.openNav;
    }
  }

}
</script>
 
<style lang="less">
 @import './style/index.less';
 #app {
   width: 100%;
   height: 100%;
 }
</style>
 
 
