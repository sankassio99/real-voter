<template>
  <div class="container mx-auto h-screen px-4">
    <div v-if="!isVoted"
      class="flex flex-col gap-10 h-screen justify-center px-4 lg:items-center"
    >
      <header-text
        text="Escolha seu candidato"
        subtitle="Selecione o candidato que terá seu voto"
      ></header-text>
      <list-candidates
        @submitVote="submitVote"
        :candidates="candidates"
        class="w-full"
      ></list-candidates>
    </div>
    <div v-else class="my-20 flex flex-col justify-center items-center gap-4">
      <title-lg :text="'Seu voto já foi registrado'"></title-lg>
      <img src="check.png" width="30" />
      <link-text :text="'Navegar para resultado'" :to="'/results'"></link-text>
    </div>
  </div>
</template>

<script>
import headerText from '~/components/Molecules/headerText.vue'
import ListCandidates from '~/components/Molecules/listCandidates.vue'
import firebase_service from '~/mixins/firebase_service.js'
import TitleLg from '~/components/Atoms/TitleLg.vue'
import LinkText from '~/components/Atoms/LinkText.vue'

export default {
  components: { headerText, ListCandidates, TitleLg, LinkText },
  mixins: [firebase_service],
  data() {
    return {
      candidates: [
        { id: "bolsonaro", name: 'Bolsonaro (PL)', number: 17 },
        { id: "lula", name: 'Lula (PT)', number: 13 },
        { id: "ciro", name: 'Ciro Gomes (PDT)', number: 12 },
        { id: "simone", name: 'Simone Tebet (MDB)', number: 15 },
        { id: "leonardo", name: 'Leonardo Péricles (UP)', number: 80 },
        { id: "luiz", name: 'Luiz Felipe d\'Avila (Novo)', number: 30 },
      ],
      isVoted: false,
    }
  },
  async created() {
    this.isVoted = await this.$store.dispatch("fetchVote");
  },
  computed: {
    voted () {
      return this.$store.state.voted
    }
  },
  methods: {
    submitVote(number) {
      const candidate = this.candidates.find(
        (candidate) => candidate.number == number
      )

      this.registerVote(candidate.id);
      this.$store.commit("vote", true);

      this.$router.push({
        path: '/results',
      })
    },
  },
}
</script>

<style></style>
