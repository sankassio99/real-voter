<template>
  <div class="max-w-xl mx-auto px-4 my-10">
    <div class="flex flex-col gap-10 justify-center px-4">
      <header-text
        :text="'Resultado da pesquisa em tempo real'"
        :subtitle="'Tecnologia que mostra em tempo real como está indo a contagem dos votos'"
      ></header-text>

      <div class="max-w-xl">
        <bar-chart
          ref="bar" 
          :data="barChartData"
          :options="barChartOptions"
          :height="400"
        />
      </div>

      <div class="w-full flex flex-col justify-center items-center gap-2">
        <p class="text-center">
          Compartilhe para alcançarmos o maior número de pessoas
        </p>
        <button-zap></button-zap>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/Atoms/BaseButton.vue'
import VotesCount from '~/components/Atoms/votesCount.vue'
import ButtonZap from '~/components/Molecules/buttonZap.vue'
import headerText from '~/components/Molecules/headerText.vue'
import BarChart from '~/components/Organims/BarChart.vue'
import firebase_service from '~/mixins/firebase_service.js'

export default {
  components: { headerText, BaseButton, VotesCount, BarChart, ButtonZap },
  mixins: [firebase_service],
  data() {
    return {
      barChartData: null,
      barChartOptions: {
        responsive: true,
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Total de votos: 460.000',
          fontSize: 14,
          fontColor: '#6b7280',
        },
        tooltips: {
          backgroundColor: '#17BF62',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0,
                stepSize: 20,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
      documents: [],
    }
  },
  async mounted() {

    let allDocs = await this.getAllDocs();
    let labels =  [];
    let values = [];
    allDocs.forEach((doc) => {
      labels.push(doc.id);
    })
    allDocs.forEach(async (doc) => {
        let data = await this.getCadidateVotes(doc.id);
        values.push(data);
    })
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
  },
  methods: {
  },
  head() {
    return {
      title: "Real Eleitor",
    }
  },
}
</script>

<style></style>
