import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue' 

import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

/*endpoints*/
const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/login',
    name: 'logIn',
    component: Login
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
