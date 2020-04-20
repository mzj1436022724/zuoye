import Vue from 'vue'
import Router from 'vue-router'
import zhu from '@/components/zhu'
import list from '@/components/list'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default  new Router({
  // mode:'hash',  
  routes: [
    {
      path: '/',
      name: 'zhu',
      component: zhu,
    },
    {
      path: '/list',
      name: 'list',
      component: list,
    },
    
  ]
})
