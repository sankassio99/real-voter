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
      barChartData: {
        labels: ['Bolsonaro', 'Lula', 'Moro', 'Ciro', 'Junior'],
        datasets: [
          {
            label: 'Votos',
            data: [19000, 17000, 6000, 3000],
            backgroundColor: 'blue',
          },
        ],
      },
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
                max: 40000,
                min: 0,
                stepSize: 10000,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    }
  },
}
</script>

<style></style>
