import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import Phone from '@/components/Phone';

Vue.use(Router)
Vue.use(Vuex)

const routes = [{
  path: '/',
  name: 'Phone',
  component: Phone
}]

export default new Router({
  routes
})
