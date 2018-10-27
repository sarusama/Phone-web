import {
  test
} from "@/states"

let states = test.states

const mutations = {
  test: function(states, newValue) {
    states.test = newValue
  }
}

export default mutations