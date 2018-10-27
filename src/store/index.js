import Vue from 'vue'
import Vuex from 'vuex'

import helloWorld from '@/store/modules/helloWorld.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    helloWorld
  }
})

export default store
