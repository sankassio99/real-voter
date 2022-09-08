<template>
  <button
    class="base-button bg-green-400 py-4 w-full rounded-full hover:bg-green-500 flex gap-2 items-center justify-center"
    @click="shareEncoded"
  >
    <span class="text-white font-semibold">Compartilhar no Zap</span>
    <img src="/icons8-whatsapp.svg" alt="" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      conteudo: '',
    }
  },
  methods: {
    shareEncoded() {
      let headText =
        '*NÃO SE DEIXE ENGANAR: veja os verdadeiros números da CORRIDA PRESIDENCIAL DE 2022*'
      let text =
        '_Fácil e rápido, dê sua intenção de voto em menos de 1 minuto e veja o resultado em tempo real_'
      let content = encodeURIComponent(
        headText + '\n\n' + text + '\n\n' +  window.location.origin
      )
      window.open(`https://api.whatsapp.com/send?text=${content}`)
    },
  },
}
</script>

<style></style>
