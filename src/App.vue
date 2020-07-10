<template>
  <div id="app">
    <div :class="{'nav-btn':true,'nav-btn-open':openNav,'nav-btn-close':closeNav}"  @click="switchNav"><div class="nav-btn-bar"></div></div>
    <div :class="{'cl-primary':true,'left-nav':true,'nav-open':openNav,'nav-close': closeNav}" >
      <div class="logo">
        
      </div>
      <ul class="menu">
        <router-link to="/" tag="li"><span>Home</span></router-link>
        <router-link to="/bolg" tag="li"><span>Bolg</span></router-link>
        <router-link to="/about" tag="li"><span>About</span></router-link>
        <router-link to="/game" tag="li"><span>Game</span></router-link>
        <router-link  class="setting-font" to="/setting" tag="li"><p>SetTing</p></router-link>
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
 
 
