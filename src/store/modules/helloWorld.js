import {
  testActions
} from '@/actions'
import {
  test
} from '@/getters'

console.log(test);

const actions = {}

const getters = {
  helloWorld: function () {
    return test.helloWorld.helloWorld
  }
}

export default {
  namespaced: true,
  getters,
  actions
}
