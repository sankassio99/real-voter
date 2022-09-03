<template>
  <div class="flex flex-col gap-2">
    <title-xl :text="text"></title-xl>
    <p class="">{{subtitle}}</p>
  </div>
</template>

<script>
import TitleXl from '../Atoms/TitleXl.vue'
export default {
  components: { TitleXl },
  props: {
    text: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
