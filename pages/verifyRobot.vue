<template>
  <div class="container mx-auto h-screen">
    <div class="flex flex-col gap-20 h-screen justify-center px-4">
      <header-text></header-text>
      <!-- reCpacthar here -->
      <div class="h-20 w-full bg-gray-400">

      </div>
      <base-button class="max-w-lg" :text="'Votar agora'"></base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/Atoms/BaseButton.vue'
import HeaderText from '~/components/Molecules/headerText.vue'
export default {
  components: { BaseButton, HeaderText },
}
</script>

<style></style>
