<template>
  <div class="container mx-auto h-screen px-4">
    <div
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
  </div>
</template>

<script>
import headerText from '~/components/Molecules/headerText.vue'
import ListCandidates from '~/components/Molecules/listCandidates.vue'

export default {
  components: { headerText, ListCandidates },
  data() {
    return {
      candidates: [
        { name: 'Bolsonaro (PL)', number: 17 },
        { name: 'Lula (PT)', number: 13 },
        { name: 'Ciro Gomes (PDT)', number: 12 },
        { name: 'Simone Tebet (MDB)', number: 15 },
        { name: 'Leonardo Péricles (UP)', number: 80 },
        { name: 'Luiz Felipe d\'Avila (Novo)', number: 30 },
      ],
    }
  },
  mounted() {
  },
  methods: {
    submitVote(number) {
      const candidate = this.candidates.find(
        (candidate) => candidate.number == number
      )

      this.$store.commit('registerVote', candidate)
    },
  },
}
</script>

<style></style>
