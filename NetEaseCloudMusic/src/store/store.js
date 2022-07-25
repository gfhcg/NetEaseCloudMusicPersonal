import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    user: {
        nickname: '123',
    }
}

const getters = {
    getUser(state) {
        return state.user
    }
};

export default new Vuex.Store({
    state,
    getters
})