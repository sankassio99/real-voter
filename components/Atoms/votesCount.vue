<template>
  <div class="w-full">
    <span>
      Total de votos:
    </span><span class="font-semibold">{{ votes }}</span>
  </div>
</template>

<script>
export default {
  props: {
    votes: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style></style>
