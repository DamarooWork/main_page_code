
export const state = () => ({
  popularReaders: null,
  popularLibraries: null,
})

export const mutations = {
  setPopularReaders(state, popularReaders) {
    state.popularReaders = popularReaders
  },
  setPopularLibraries(state, popularLibraries) {
    state.popularLibraries = popularLibraries
  }
}

export const actions = {
  async fetch({commit}) {
    const response = await this.$axios.$get('http://help.support.rusneb.dev.infospice.ru/api/kb.questions@popular/')
    popularReaders = response.data.popular_questions
    commit('setUsers', popularReaders)
  }
}

export const getters = {
  popularReaders: s => s.popularReaders
}
