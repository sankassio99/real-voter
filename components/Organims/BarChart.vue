<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted() {
    setTimeout(()=>{
      this.renderChart(this.data, this.options)
    }, 500);
  },
  methods:{
    updateChart(){
    }
  }
}
</script>
