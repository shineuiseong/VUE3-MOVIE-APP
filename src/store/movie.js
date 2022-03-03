export default {
  // moduel
  namespaced: true,
  // data
  state: () => ({
    movies: [],
  }),
  // computed
  getters: {
    moviesids(state) {
      return state.movies.map((m) => m.imdbID)
    },
  },
  // methods!
  mutations: {
    resetMovies(state) {
      state.movies = []
    },
  },
  actions: {
    searchMovies() {},
  },
}
