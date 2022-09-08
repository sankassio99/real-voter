<template>
  <div
    @click="submit"
    class="
      base-button
      border-2
      bg-red-400
      py-4
      w-full
      flex
      items-center
      justify-center
      rounded-full
      hover:bg-red-300
      p-10
      cursor-pointer
    "
  >
    <p class="text-lg font-semibold">{{ name }} {{ number }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
  },
}
</script>

<style>
</style>
