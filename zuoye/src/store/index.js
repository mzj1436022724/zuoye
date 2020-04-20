import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VuePersist from 'vuex-persist'
// vuex的本地存储
const vuexLocal = new VuePersist({
    storage:window.localStorage
})
// 使用本地存储

export default new Vuex.Store({
    
    plugins:[vuexLocal.plugin],
    // 使用本地存储
    state:{
        
    },
  
    mutations:{
          
        },
})