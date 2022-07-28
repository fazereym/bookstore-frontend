export default {
    namespaced: true,
    state: {
        carts: []
    },
    mutations: {
        insert(state, payload) {
            const cartObj = {
                id: payload.id,
                title: payload.title,
                cover: payload.cover,
                price: payload.price,
                weight: payload.weight,
                quantity: 1
            }

            state.carts.push(cartObj)
        },
        update(state, payload) {
            const idx = state.carts.indexOf(payload)
            const cartObj = {
                id: payload.id,
                title: payload.title,
                cover: payload.cover,
                price: payload.price,
                weight: payload.weight,
                quantity: 1
            }

            state.carts.splice(idx, 1, cartObj)
        }
    },
    actions: {
        add({ state, commit }, payload) {
            const cartItem = state.carts.find(item => item.id === payload.id)

            if(!cartItem) {
                commit('insert', payload)
            } else {
                commit('update', cartItem)
            }
        }
    },
    getters: {
        carts(state) {
            return state.carts
        },
        count(state) {
            return state.carts.length
        }
    }
}