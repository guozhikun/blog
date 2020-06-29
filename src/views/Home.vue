<template>
  <div class="home">
     <div style="float:left;width:200px">
          <div>
           <div class="cl-primary" style="width:160px;height:80px">primary</div>
            <div class="cl-primary-light" style="width:160px;height:80px">primary-light</div>
            <div class="cl-primary-dark" style="width:160px;height:80px">primary-dark</div>
            <div class="cl-primary-complement" style="width:160px;height:80px">primary-complement</div>
            <div class="cl-primary-triad-1" style="width:160px;height:80px">cl-primary-triad-1</div>
            <div class="cl-primary-triad-2" style="width:160px;height:80px">cl-primary-triad-2</div>
          </div>
          <div>
            <div class="cl-secondary" style="width:160px;height:80px">secondary</div>
            <div class="cl-secondary-light" style="width:160px;height:80px">secondary-light</div>
            <div class="cl-secondary-dark" style="width:160px;height:80px">secondary-dark</div>
            <div class="cl-secondary-complement" style="width:160px;height:80px">secondary-complement</div>
            <div class="cl-secondary-triad-1" style="width:160px;height:80px">cl-secondary-triad-1</div>
            <div class="cl-secondary-triad-2" style="width:160px;height:80px">cl-secondary-triad-2</div>
          </div>
          
        </div>
         <photoshop-picker v-model="colors"   style="float:right"  @input="handleChangeColor"></photoshop-picker>
    
  </div>
</template>

<script>
import less from 'less';
// @ is an alias to /src
import { Photoshop } from 'vue-color'

export default {
  name: 'Home',
  data(){
    return{
      colors:{ h: 150, s: 0.5, l: 0.2, a: 1 }
    }
  },
  components: {
    "photoshop-picker":Photoshop
  },
  methods:{
    handleChangeColor(val){
      var hVal =  val.hsl.h
      var sVal =  val.hsl.s*100+'%'
      var lVal =  val.hsl.l*100+'%'
      console.log(hVal+','+sVal+','+lVal)
      less.modifyVars({  '--color--primary--h':hVal,'--color--primary--s':sVal,'--color--primary--l':lVal});
    //document.documentElement.style.setProperty(`--color--primary--h`,hVal);
    }
  }
}
</script>
