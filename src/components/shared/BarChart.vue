<template>
  <Bar
    id="chartId"
    :options="chartOptions"
    :data="chartData"
    class="bar-chart"
  />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: {
    Bar
  },
  // uncomment the props below when we have chart data coming from the API
  /* props: {
    chartId: {
      type: String
    },
    chartData: {
      type: Object,
      required: true
    }
  }, */
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [ 
          { 
            label: 'Dining',
            data: [40, 20, 50],
            backgroundColor: '#2e327d'
          },
          { 
            label: 'Events',
            data: [30, 10, 18],
            backgroundColor: 'orange'
          }, 
          { 
            label: 'Spa',
            data: [50, 40, 30],
            backgroundColor: '#ab1302'
          } 
        ]
      },
      chartOptions: {
        responsive: false
      }
    }
  }
}
</script>
  
<style lang="scss">
.bar-chart {
  height: auto;
  width: 40%;
}
</style>
    