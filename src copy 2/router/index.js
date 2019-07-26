import Vue from 'vue'
import Router from 'vue-router'
import comA from '@/components/comA'
import comB from '@/components/comB'

import comC from '@/components/comC'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/A'
    },
    {
      path: '/A',
      name: 'comA',
      component: comA
    },
    {
      path: '/B',
      name: 'comB',
      component: comB,
      meta:{
        cacheQueue:[]
      }
    },
    {
      path: '/C',
      name: 'comC',
      component: comC
    }
  ]
});

// router.beforeEach((to,from,next)=>{
//   console.log("****beforeEach****");
//   next();
// });
// router.beforeResolve((to,from,next)=>{
//   console.log("****beforeResolve****");
//   next();
// });
// router.afterEach((to,from,next)=>{
//   console.log("****afterEach****");
// });
