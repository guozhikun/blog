<template>
    <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section" style="background:palegoldenrod">
      First section ...
    </div>
    <div class="section" style="background:lavender">
      Second section ...
    </div>
    <div class="section" style="background:cadetblue">
      Second section ...
    </div>
  </full-page>
</div>
</template>
<script>
import less from 'less';
export default {
  data(){
    return{
      options:{}
    }
  },
   mounted(){
     less.modifyVars({
      '@--color--primary--h': '265',
      '@--color--secondary--h': '180'
    });
 
   }
}
</script>