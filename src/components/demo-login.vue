<template>
  <div class="container">
    <form class="form-signin" v-on:submit.prevent="onSubmit">
      <h2 class="form-signin-heading">Introduce usuario</h2>
      <label for="inputEmail" class="sr-only">Usuario</label>
      <input type="text" class="form-control" placeholder="Introduce usuario" required="" autofocus="" v-model="user">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" class="form-control" placeholder="Password" required="" v-model="pwd">
      <button class="btn btn-lg btn-primary btn-block" type="submit" >Enviar</button>
      <!--Show eror when password is invalid-->
      <div class="alert alert-danger" v-if="showError">
        <strong>Pasword incorrecta. (Use por ejemplo Maria y password 1234)</strong>
      </div>
    </form>
  </div>

</template>

<style type="text/css" scoped>  
  div{
    max-width: 300px;
  }
</style>

<script>
let bbdd = require('../bbdd.js').BBDD;
export default {
  data () {
    return {
      user:null,
      pwd: null,
      showError:false
    }
  },
  methods:{
    onSubmit:function(){
      if(bbdd.checkUser(this.user, this.pwd)){
        this.$router.replace('/page1');
      }else{
        this.showError =true;        
      }      
    }
  }
}
</script>

