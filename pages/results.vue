<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col gap-10 justify-center px-4">
      <header-text
        :text="'Resultado das pesquisas em tempo real'"
        :subtitle="'Tecnologia que mostra em tempo real como está indo so votos'"
      ></header-text>

      <!-- grafics -->
      <div class="max-w-xl">
        <!-- <votes-count :votes="13000"></votes-count> -->
        <bar-chart
          ref="bar"
          :data="barChartData"
          :options="barChartOptions"
          :height="400"
        />
      </div>

      <div>
        <p class="text-center">
          Compartilhe para alcançarmos o maior número de pessoas
        </p>
        <base-button :text="'Compartilhar Zap'"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/Atoms/BaseButton.vue'
import VotesCount from '~/components/Atoms/votesCount.vue'
import headerText from '~/components/Molecules/headerText.vue'
import BarChart from '~/components/Organims/BarChart.vue'
export default {
  components: { headerText, BaseButton, VotesCount, BarChart },
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
                max: 20,
                min: 0,
                stepSize: 5,
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
  mounted() {
    let bolsonaro = 0;
    this.documents.forEach((element) => element.number == 17 ? bolsonaro += 1 : bolsonaro += 0);

    let lula = 0;
    this.documents.forEach((element) => element.number == 13 ? lula += 1 : lula += 0);

    let ciro = 0;
    this.documents.forEach((element) => element.number == 12 ? ciro += 1 : ciro += 0);

    let simone = 0;
    this.documents.forEach((element) => element.number == 15 ? simone += 1 : simone += 0);

    let leo = 0;
    this.documents.forEach((element) => element.number == 80 ? leo += 1 : leo += 0);

    let luiz = 0;
    this.documents.forEach((element) => element.number == 30 ? luiz += 1 : luiz += 0);

    this.barChartData = {
      labels: ['Bolsonaro', 'Lula', 'Ciro', 'Simone', 'Leonardo', 'Luiz Feipe'],
      datasets: [
        {
          label: 'Votos',
          data: [bolsonaro, lula, ciro, simone, leo, luiz],
          backgroundColor: 'blue',
        },
      ],
    }
  },
  async asyncData({ $fire }) {
    let allDocs = []
    await $fire.firestore
      .collection('real-voter')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allDocs.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })

    return { documents: allDocs }
  },
  methods: {
    async getAllDocuments() {},
  },
}
</script>

<style></style>
