<template>
  <div class="container mx-auto h-screen">
    <div class="flex flex-col gap-20 h-screen justify-center items-center px-4">
      <header-text
        text="Confirme que seu voto é real"
        subtitle="Dessa forma garantimos a veraciade do seu voto"
      ></header-text>
      <div class="h-20 w-full flex justify-center items-center">
        <div
          class="border rounded-sm flex p-10 gap-4 justify-center items-center"
        >
          <input
            v-if="!verified"
            type="checkbox"
            id="scales"
            name="scales"
            v-model="verified"
          />
          <img
            class="animate-spin"
            v-else-if="loading"
            src="loading.png"
            width="30"
          />
          <img v-else-if="!loading" src="check.png" width="30" />
          <span class="font-bold text-gray-600">Eu não sou um robô</span>
        </div>
      </div>
      <div class="flex flex-col gap-2 w-full justify-center items-center">
        <span class="text-red-400">{{ error }}</span>
        <base-button
          @submit="submit"
          class="max-w-lg"
          :text="'Votar agora'"
        ></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/Atoms/BaseButton.vue'
import HeaderText from '~/components/Molecules/headerText.vue'
export default {
  components: { BaseButton, HeaderText },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      verified: false,
      loading: false,
      error: '',
    }
  },
  watch: {
    verified() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
  },
  methods: {
    async submit() {
      if (this.verified) {
        try {
          const token = await this.$recaptcha.execute('login')
          // console.log('ReCaptcha token:', token)

          this.$router.push({
            path: '/chooseCandidate',
          })
        } catch (error) {
          console.log('Login error:', error)
        }
      } else {
        this.error = 'Verifique sua identidade antes de prosseguir!'
      }
    },
  },
}
</script>

<style></style>
