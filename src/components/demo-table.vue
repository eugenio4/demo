<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Data Info</h3>
      </div>
      <div class="panel-body">
       <table class="table table-bordered">
        <tr v-for="(val, key) in data.info">
          <th scope="row">{{key}}</th>
          <td>{{val}}</td>
        </tr>      
      </table>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Data result</h3>
    </div>
    <div class="panel-body">
      <ul v-for="(item, index) in data.results">
        <li v-for="(val, key) in item">        
          <demo-element :keyElement="key" :value="val"></demo-element>
        </li>
      </ul>
    </div>
  </div>

</template>

<style type="text/css" scoped>
  table{
    max-width: 250px;
  }

  ul{
    list-style-type: none;
  }
</style>

<script>
  let demoElement =require('./demo-element.vue');
  export default {
    components:{
      demoElement
    },
    props:{
      data:{
        type:Object,
        default:{}
      }
    }
  }
</script>