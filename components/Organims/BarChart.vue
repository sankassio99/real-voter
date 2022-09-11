<script>
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-labels'

export default {
  extends: Bar,
  props: ['data', 'options', 'totalOfVotes'],
  components: { ChartDataLabels },
  mounted() {
    let barChartOptions = {
      plugins: {
        labels: {
          render: 'image',
          images: [
            {
              src: '/candidates/jair-bolsonaro.jpeg',
              width: 35,
              height: 35,
            },
            {
              src: '/candidates/ciro-gomes-.jpeg',
              width: 35,
              height: 35,
            },
            {
              src: '/candidates/felipe.jpeg',
              width: 35,
              height: 35,
            },
            {
              src: '/candidates/lula-foto-tse.jpeg',
              width: 35,
              height: 35,
            },
            {
              src: '/candidates/simone-tebet.jpeg',
              width: 35,
              height: 35,
            },
            {
              src: '/candidates/soraya-thronicke-1.jpeg',
              width: 35,
              height: 35,
            },
          ],
        },
      },
      responsive: true,
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: `Total de votos: ${this.totalOfVotes}`,
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
              max: 360,
              min: 0,
              stepSize: 72,
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
    }

    this.renderChart(this.data, barChartOptions)
  },
  methods: {
    updateChart() {},
  },
}
</script>
