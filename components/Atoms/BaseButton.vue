
<template>
  <button :type="buttonType"
    @click="navigate"
    class="base-button bg-green-400 py-4 w-full rounded-full hover:bg-green-500"
  >
    <span class="text-white">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
    },
    buttonType: {
      type: String,
      default: 'button',
      required: false,
    }
  },
  methods: {
    navigate() {
      console.log("aqui: "+this.to);
      if (this.to) {
        this.$router.push({
          path: this.to,
        })
      }
    },
  },
}
</script>

<style></style>
