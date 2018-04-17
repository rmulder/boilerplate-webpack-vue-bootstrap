import Vuex from 'vuex'

export default function store () {
  return new Vuex.Store({
    state: {
      error: null,
      message: null,
      loading: false,
    },
    mutations: {
      setMessage (state, message) {
        if (state.message === null) {
          state.message = message
          state.currentTimeout = setTimeout(() => {
            state.message = null
          }, 3000)
        }
      },
      setError (state, error) {
        if (state.error === null) {
          state.error = error
          state.currentTimeout = setTimeout(() => {
            state.error = null
          }, 5000)
        }
      },
      startLoading (state) {
        state.loading = true
      },
      stopLoading (state) {
        state.loading = false
      }
    },
    getters: {},
    actions: {}
  })
}