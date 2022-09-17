<template>
  <div class="w-full h-20">
    <div class="animate-pulse rounded-full bg-blue-200 w-full h-5 flex items-center justify-between py-3 px-1">
      <div class="rounded-full bg-blue-800 h-5 flex items-center px-10" :class="'w-1/3'">
        <span class="text-white">{{votesQuantity}}</span>
      </div>
      <span>meta 35000 votos</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        votesQuantity: {
            type: Number,
            required: true,
        },
    },
}
</script>

<style></style>
