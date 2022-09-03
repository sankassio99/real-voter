<template>
  <div class="container mx-auto h-screen px-4">
    <div class="flex flex-col gap-10 h-screen justify-center px-4">
      <header-text
        text="Escolha seu candidato"
        subtitle="Selecione o candidato que terá seu voto"
      ></header-text>
      <list-candidates :candidates="candidates" class="w-full"></list-candidates>
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
        { name: 'Bolsonaro', number: 17 },
        { name: 'Lula', number: 13 },
      ],
    }
  },
}
</script>

<style></style>
