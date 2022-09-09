<template>
  <div
    @click="submit"
    class="
      base-button
      py-4
      w-full
      flex
      items-center
      justify-center
      border
      rounded-full
      bg-red-400
      hover:bg-red-300
      p-10
      cursor-pointer
      shadow-sm
    "
  >
    <p class="font-semibold text-gray-600">{{ name }} {{ number }}</p>
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
