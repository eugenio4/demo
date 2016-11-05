let Vue =require('vue'),
 VueRouter =require('vue-router'),
 bbdd = require('./bbdd.js').BBDD,
 User = require('./users.js').User;

 //components
 let Login = require ('./components/demo-login.vue'),
  Page =require('./components/demo-page.vue');

Vue.use(VueRouter)

//Create router
const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', component: Login },
    { path: '/page1', component: Page }
  ]
})

// Create and mount root instance.
// Route components will be rendered inside <router-view>.
new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')

//create user and add BBDD
let user1 = new User('Maria','1234');
let user2 = new User('Lucia','1234');
let user3 = new User('Juan','1234');
let user4 = new User('Pedro','1234');

bbdd.addUser(user1);
bbdd.addUser(user2);
bbdd.addUser(user3);
bbdd.addUser(user4);
