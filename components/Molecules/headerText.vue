<template>
  <div class="flex flex-col gap-2">
    <title-xl :text="'Confirme que seu voto é real'"></title-xl>
    <p class="">Dessa forma garantimos a veraciade do seu voto</p>
  </div>
</template>

<script>
import TitleXl from '../Atoms/TitleXl.vue'
export default {
  components: { TitleXl },

}
</script>

<style>

</style>