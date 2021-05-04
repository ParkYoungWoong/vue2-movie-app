import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'
import about from './about'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    about
  }
})
