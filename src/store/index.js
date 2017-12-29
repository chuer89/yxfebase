import Vue from 'vue'
import Vuex from 'vuex'

import moduleHome from './home'

Vue.use(Vuex)

console.log(moduleHome)

const homeStore = new Vuex.Store({
  state: {
    userInfo: {},
    count: 0,
    todos: []
  },
  getters: {
    getUserInfo (state) {
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    increment (state) {
      state.count ++
    },
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    delTodo (state, {todo}) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    }
  }
})

export default homeStore
