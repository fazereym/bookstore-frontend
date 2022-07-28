export default {
    namespaced: true,
    state: {
        status: false,
        component: ''
    },
    mutations: {
        setStatus(state, payload) {
            state.status = payload
        },
        setComponent (state, payload) {
            state.component = payload
        }
    },
    actions: {
        setStatus({ commit }, payload) {
            commit('setStatus', payload)
        },
        setComponent({ commit }, payload) {
            commit('setComponent', payload)
        }
    },
    getters: {
        status(state) {
            return state.status
        },
        component (state) {
            return state.component
        }
    }
}