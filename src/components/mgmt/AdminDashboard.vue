<template>
  <div class="admin-dashboard">
    <CustomHeader
      title="Concierge - Admin"/>
    <div class="content">
      <h1>Admin Dashboard</h1>
      <h3 class="greetings">{{ msg }}</h3>
      <BarChart/>
    </div>
  </div>
</template>

<script>
import CustomHeader from '../shared/CustomHeader.vue'
import BarChart from '@/components/shared/BarChart.vue'
export default {
  components: {
    BarChart,
    CustomHeader
  },
  data() {
    return {
        msg: 'Work in Progress ...'
    }
  }
}
</script>

<style lang="scss">
.admin-dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    position: relative;
    margin-top: 200px;
    .bar-chart {
      height: auto;
      width: 50%;
    }
  }
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
  }
  
  h3 {
    font-size: 1.2rem;
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    h1,
    h3 {
      text-align: left;
    }
  }
}
</style>