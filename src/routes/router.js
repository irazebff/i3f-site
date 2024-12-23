import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from '@/pages/AppHome.vue'

Vue.use(VueRouter)


const routes = [  
    {
        path: '/',
        name: 'AppHome',
        component: AppHome
    }
  ];

const router = new VueRouter({
    routes,
    mode: 'history' 
});

export default router
