<template>
  <div>
    <li><label>{{keyElement}}</label></li>
    <ul>      
      <div v-if="!isObject">
        <label v-if="!isImg" >{{value}}</label>
        <img v-else :src="value"/>
      </div>      
      <div v-else v-for="(val, key) in value">
        <demo-element :keyElement="key" :value="val"></demo-element>
      </div>
    <ul>    
  </div>
</template>

<style type="text/css" scoped>
  ul{
    list-style-type: none;
  }
  ul ul label{
    color: gray;
  }
  ul ul ul label{
    margin-bottom: 0px;
    font-weight: 200;
    color:black;
  }
</style>

<script>
  export default {
    name:'demo-element',
    props:{
      keyElement:{},
      value:{}
    },
    computed:{
      isObject:function(){
        return typeof this.value === 'object';
      },
      isImg:function(){
        if(this.isObject === false && typeof this.value === 'string'){
          return(this.value.match(/\.(jpeg|jpg|gif|png)$/) != null);
        }else{
          return false;
        }      
      }
    }
  }
</script>