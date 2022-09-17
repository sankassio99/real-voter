<template>
  <div class="max-w-2xl mx-auto px-2 my-10">
    <sucess-alert v-if="successVote" :text="'Seu voto foi registrado com sucesso 🎉'"></sucess-alert>

    <div class="flex flex-col gap-10 justify-center px-4">
      
      <header-text
        :text="'Resultado da pesquisa em tempo real'"
        :subtitle="'Tecnologia que mostra em tempo real como está indo a contagem dos votos'"
      ></header-text>

      <div class="max-w-xl">
        <bar-chart
          v-if="dataIsGot"
          ref="bar"
          :data="barChartData"
          :height="390"
          :totalOfVotes="totalVotes"
        />
        <div v-else class="h-96 flex flex-col items-center justify-center">
          <p class="text-center font-semibold text-gray-600 animate-pulse">
            Gerando gráfico ...
          </p>
        </div>
      </div>

      <div class="w-full flex flex-col justify-center items-center gap-2">
        <p class="text-center">
          Compartilhe para alcançarmos o maior número de pessoas
        </p>
        <button-zap></button-zap>
      </div>

      <!-- <div class="flex flex-col gap-4">
        <title-lg :text="'Forum para discussão'"></title-lg>
        <div class="border rounded-sm p-2">
          <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments/realeleitor" data-width="" data-numposts="4"></div>
        </div>
      </div> -->

      <!-- <div>
        <div class="fb-share-button" data-href="https://www.realeleitor.com.br/" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.realeleitor.com.br%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Compartilhar</a></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/Atoms/BaseButton.vue'
import TitleLg from '~/components/Atoms/TitleLg.vue'
import VotesCount from '~/components/Atoms/votesCount.vue'
import ButtonZap from '~/components/Molecules/buttonZap.vue'
import headerText from '~/components/Molecules/headerText.vue'
import BarChart from '~/components/Organims/BarChart.vue'
import firebase_service from '~/mixins/firebase_service.js'
import SucessAlert from '../components/Atoms/SuccessAlert.vue'

export default {
  components: { headerText, BaseButton, VotesCount, BarChart, ButtonZap, SucessAlert, TitleLg },
  mixins: [firebase_service],
  data() {
    return {
      barChartData: null,
      totalVotes: 0,
      dataIsGot: false,
      successVote: false,
    }
  },
  computed: {},
  async created() {
    // todo: precisa ser refatorado
    let allDocs = await this.getAllDocs()
    let labels = []
    let values = []
    // get candidates names
    allDocs.forEach((doc) => {
      labels.push(doc.id)
    })
    // get candidate votes
    allDocs.forEach(async (doc) => {
      let votesCount = doc.votesCount
      let multVotes = votesCount * 6
      this.totalVotes += multVotes
      values.push(multVotes)
    })

    // organize chart infos
    this.barChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Votos',
          data: values,
          backgroundColor: 'blue',
        },
      ],
    }

    setTimeout(() => {
      this.dataIsGot = true
    }, 1000)
  },
  mounted(){
    var res = this.$route.fullPath.split('?');
    if(res[1]){
      this.successVote = true;
    }
  },
  methods: {
    fbLog() {
      window.FB.getLoginStatus(function (response) {
        this.statusChangeCallback(response)
      })
    },
    statusChangeCallback(response) {
      console.log(response)
    },
  },
  head() {
    return {
      title: 'Real Eleitor',
    }
  },
}
</script>

<style></style>
