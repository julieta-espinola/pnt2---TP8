import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const urlMock = 'https://60b6e23917d1dc0017b8878b.mockapi.io/USUARIOS'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios : []
    },
    actions : {
        getUsuariosAxiosThen({commit}) {
            axios(urlMock)
            .then( respuesta => {
                commit('getUsuarios', respuesta.data)
            })
            .catch(() => commit('getUsuarios',[]))
        },
        async getUsuariosAxiosAsync({commit}) {
            try {
                let {data:usuarios} = await axios(urlMock)
                commit('getUsuarios',usuarios)
            }
            catch  {
                commit('getUsuarios',[])
             }
            
        },
        async enviarUsuarios ({commit},usuario) {
            try {
                await axios.post(urlMock, usuario)
                commit('emptyStore')
            }
            catch {
                commit('emptyStore')
            }
        }
    },
    mutations : {
        getUsuarios(state,usuarios) {
            state.usuarios = usuarios
        },
        emptyStore(state) {
            state.usuarios = [];
        }
    } 
})