<script>
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-labels';

export default {
  extends: Bar,
  props: ['data', 'options'],
  components: { ChartDataLabels },
  mounted() {
    setTimeout(()=>{
      this.renderChart(this.data, this.options)
    }, 1000);
  },
  methods:{
    updateChart(){
    }
  }
}
</script>
