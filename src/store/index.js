import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        objBusca: null
    },
    getters: {
        retornarObjBusca(state) {
            return state.objBusca
        },
        retornarCartas(state) {
            return state.objBusca?.data ?? []
        }
    },
    mutations: {
        setarObjBusca(state, objBusca) {
            state.objBusca = { ...objBusca }
        },
        setarPokemonSelecionado(state, objSelecionado) {
            state.objPokemonSelecionado = { ...objSelecionado }
        }
    },
    actions: {
        setarObjBusca({ commit }, payload) {
            commit('setarObjBusca', payload)
        }
    }
})
