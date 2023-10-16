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
            backgroundColor: 'blue'
          },
          { 
            label: 'Events',
            data: [30, 10, 18],
            backgroundColor: 'orange'
          }, 
          { 
            label: 'Spa',
            data: [50, 40, 30],
            backgroundColor: 'red'
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
.main-header {
  background-color: #84A7AE;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 180px;
  padding: 20px;
  width: 100%;
  &.black {
    h1 {
      color: black;
    }
  }
  .logo {
    background-color: white;
    display: block;
    margin: 20px 40px;
    height: 100px;
    width: 100px;    
    border-radius: 6px;
  }
  h1 {
    color: white;
    font-family: 'Marcellus', Times, serif;
    font-size: 3rem;
  }
}
</style>
    