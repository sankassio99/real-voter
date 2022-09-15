var aguid = require('aguid')

export default {
  data() {
    return {}
  },
  methods: {
    async getLulaVotes() {
      await this.$fire.firestore
        .collection('candidates')
        .doc('lula')
        .collection('votes')
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot.size)
        })
    },

    async getCadidateVotes(name) {
      let votes = 0
      await this.$fire.firestore
        .collection('candidates')
        .doc(name)
        .collection('votes')
        .get()
        .then((querySnapshot) => {
          votes = querySnapshot.size
        })

      return votes
    },
    async getCadidateWithVotes(name) {
      let candidate = null ;
      await this.$fire.firestore
        .collection('candidates')
        .doc(name)
        .get()
        .then((querySnapshot) => {
          candidate = {
            id: querySnapshot.id,
            ...querySnapshot.data(),
          }
        })

      return candidate
    },
    async getAllCandidates() {
      var candidates = []
      await this.$fire.firestore
        .collection('candidates')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            candidates.push({
              id: doc.id,
              ...doc.data(),
            })
          })
        })

      return candidates
    },

    async registerVote(candidate) {
      const guid = aguid()
      console.log(candidate);
      try {
        this.$fire.firestore
          .collection('candidates')
          .doc(candidate)
          .collection('votes')
          .doc(guid)
          .set({})
      } catch (err) {
        console.log(err)
      }
    },

    async getAllDocs() {
      let allDocs = []
      await this.$fire.firestore
        .collection('candidates')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (doc) => {
            allDocs.push({
              id: doc.id,
              ...doc.data(),
            })
          })
        })

      return allDocs
    },
  },
}
