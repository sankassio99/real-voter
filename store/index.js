var aguid = require('aguid')

export const state = () => ({
  candidates: null,
})

export const getters = {
  getVotes(state) {
    try {
      console.log('auqi')
      state.candidates = this.$fire.firestore.collection('real-voter')
    } catch (err) {
      console.log(err)
    }
  },
}

export const mutations = {
  async registerVote({ commit, state, rootState }, candidate) {
    try {
      this.$fire.firestore.collection('real-voter').doc(aguid()).set({
        name: candidate.name,
        number: candidate.number,
      })
    } catch (err) {
      console.log(err)
    }
  },
}

export const actions = {
  async getVotes({ state }) {
    try {
      state.candidates = this.$fire.firestore.collection('real-voter').get()
    } catch (err) {
      console.log(err)
    }
  },
}
