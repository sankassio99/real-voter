<template>
  <div
    v-show="showing"
    class="fixed top-2 flex flex-col w-full bg-green-500 
    bg-opacity-80 p-3 rounded-sm shadow-lg items-center justify-center"
  >
    <span class="text-white font-semibold">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showing: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showing = false
    }, 4000)
  },
}
</script>

<style></style>
