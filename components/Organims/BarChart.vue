<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
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
