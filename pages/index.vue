<template>
  <verify-robot />
</template>

<script lang="ts">
import Vue from 'vue'
import verifyRobot from './verifyRobot.vue'

export default Vue.extend({
  components: { verifyRobot },
  name: 'IndexPage',
})
</script>
