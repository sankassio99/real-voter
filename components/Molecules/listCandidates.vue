<template>
  <div class="flex flex-col mx-auto py-10 gap-5">
    <div
      v-for="candidate in candidates"
      :key="candidate.number"
      class="w-full flex justify-center items-center"
    >
      <candidate-button
        @submit="submitVote(candidate.number)"
        class="max-w-md"
        :name="candidate.name"
        :number="candidate.number"
      ></candidate-button>
    </div>
  </div>
</template>

<script>
import candidateButton from '../Atoms/candidateButton.vue'
export default {
  components: { candidateButton },
  props: {
    candidates: {
      type: Array,
      required: true,
    },
  },
  methods: {
    submitVote(number) {
      this.$emit('submitVote', number);
      this.$router.push({
        path: '/results',
      })
    },
  },
}
</script>

<style></style>
CandidateButton
