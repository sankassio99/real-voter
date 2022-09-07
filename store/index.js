export const state = () => ({
  voted: false
})

export const getters = {
  getVote(state) {
    return state.voted
  }
}

export const mutations = {
  vote(state) {
    state.voted = true;
    localStorage.setItem('vote', state.voted);
  }
}

export const actions = {
  async fetchVote({ state }) {
    let isVoted = localStorage.getItem('vote');
    console.log("pegando: "+isVoted);
    state.vote;
    return isVoted;
  }
}