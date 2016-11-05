<template>
  <div>
    <div class="center" v-show="!isLoaded">
      <img src="src/img/spinner.gif"/>
    </div>
    <demo-table v-show="isLoaded" :data="dataTable"></demo-table>
  </div>
</template>

<style type="text/css">
  .center{
    text-align: center;
  }
</style>

<script>
let demoTable =require('./demo-table.vue');
let jQuery = require('jquery');

export default {
  name: 'hello',
  components:{
    demoTable
  },
  created:function(){
    jQuery.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        this.isLoaded = true;
        this.dataTable = data;
      }.bind(this)
    });
  },
  data:function(){
    return {
      dataTable:{},
      isLoaded:false
    }
  }
}
</script>