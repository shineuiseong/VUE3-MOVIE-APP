import axios from 'axios'
export default {
  // moduel
  namespaced: true,
  // data
  state: () => ({
    movies: [],
    message: '',
    loading: false,
  }),
  // computed
  getters: {},
  // methods!
  mutations: {
    updateState(state, payload) {
      // 배열로 반환
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    },
  },
  actions: {
    async searchMovies({ commit }, payload) {
      const { title, type, year, number } = payload
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search,
      })
    },
  },
}
