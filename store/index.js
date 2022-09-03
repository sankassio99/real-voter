var aguid = require('aguid');

export const state = () => ({
  counter: 0,
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
}

export const mutations = {
    async  registerVote({ commit, state, rootState }, candidate) {
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
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 }
    state.counter = res.data
    return res.data
  },
}
