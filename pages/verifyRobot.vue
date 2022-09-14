<template>
  <div class="container mx-auto h-screen">
    <div class="flex flex-col gap-20 h-screen justify-center items-center px-4">
      <div class="flex flex-col justify-center items-center">
        <logo-main></logo-main>
        <header-text
          text="Pesquisa popular para presidente 2022"
          subtitle="Mostre sua intenção de voto de forma 100% anônima"
        ></header-text>
      </div>
      <!-- todo: tem que virar um organims -->
      <div class="h-20 w-full flex flex-col justify-center items-center">
        <div
          class="border rounded-md flex p-10 gap-4 justify-center items-center"
          :class="error ? 'border-2 border-red-400' : ''"
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
        <span class="text-red-400 text-sm font-semibold">{{ error }}</span>
      </div>
      <div class="flex flex-col gap-2 w-full justify-center items-center">
        <base-button
          @submit="submit"
          class="max-w-lg"
          :text="'Votar agora'"
        ></base-button>
        <link-text
          :text="'Já votou? Navegar para resultado'"
          :to="'/results'"
        ></link-text>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/Atoms/BaseButton.vue'
import HeaderText from '~/components/Molecules/headerText.vue'
import LinkText from '~/components/Atoms/LinkText.vue'
import LogoMain from '~/components/Molecules/logoMain.vue'

export default {
  components: { BaseButton, HeaderText, LinkText, LogoMain },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e)
    }

    if (process.client) {
      this.$fire.analytics.logEvent("page_view", {});
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
  head() {
    return {
      title: "Real Eleitor",
    }
  },
}
</script>

<style></style>
