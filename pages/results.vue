<template>
  <div class="container mx-auto h-screen px-4">
    <div class="flex flex-col h-screen gap-10 justify-center px-4">
      <header-text
        :text="'Resultado das pesquisas em tempo real'"
        :subtitle="'Tecnologia que mostra em tempo real como está indo so votos'"
      ></header-text>
      
      <!-- grafics -->
      <div class="w-full h-80 bg-blue-200">
        <votes-count votes="13000"></votes-count>
      </div>

      <base-button :text="'Compartilhar Zap'"></base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/Atoms/BaseButton.vue'
import VotesCount from '~/components/Atoms/votesCount.vue'
import headerText from '~/components/Molecules/headerText.vue'
export default {
  components: { headerText, BaseButton, VotesCount },
}
</script>

<style></style>
