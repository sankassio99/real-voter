
<template>
  <button :type="buttonType"
    @click="submit"
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
    submit() {
      this.$emit('submit');
    },
  },
}
</script>

<style></style>
