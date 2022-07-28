export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        set (state, payload) {
            state.user = payload
        }
    },
    actions: {
        set ({ commit }, payload) {
            commit('set', payload)
        }
    },
    getters: {
        user (state) {
            return state.user
        },
        guest (state) {
            return Object.keys(state.user).length === 0
        }
    }
}