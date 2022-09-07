<template>
  <div>
    <nuxt-link class="text-blue-500 font-semibold hover:underline" :to="to">{{text}}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>

</style>