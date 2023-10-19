<template>
  <div class="admin-dashboard">
    <CustomHeader
      subtitle="Admin"/>
    <div class="content">
      <BarChart/>
      <div class="col left">
        <BasicTable 
          id="managers"
          :columns="managerCols"
          :rowData="managers"
          title="Managers"
          @addItem="addManager"
          @deleteItem="deleteManager"/>
        <BasicTable
          id="services"
          :columns="serviceCols"
          :rowData="services"
          title="Services"
          @addItem="addService"
          @deleteItem="deleteService"/>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '../shared/CustomHeader.vue'
import BarChart from '@/components/shared/BarChart.vue'
import BasicTable from '@/components/shared/BasicTable.vue'

export default {
  components: {
    CustomHeader,
    BarChart,
    BasicTable
  },
  data() {
    return {
      managers: [
        {
          name: 'Abby Wright',
          dept: 'Spa'
        },
        {
          name: 'Beau Dean',
          dept: 'Dining'
        },
        {
          name: 'Charles Host',
          dept: 'Events'
        }
      ],
      managerCols: [
        {
          id: 'name',
          label: 'Name'
        },
        {
          id: 'dept',
          label: 'Department'
        }
      ],
      services: [
        {
          dept: 'Spa'
        },
        {
          dept: 'Dining'
        },
        {
          dept: 'Events'
        }
      ],
      serviceCols: [
        {
          id: 'dept',
          label: 'Department'
        }
      ],
      msg: 'Work in Progress ...'
    }
  },
  methods: {
    addManager(obj) {
      console.log('manager added')
      console.log(JSON.stringify(obj))
    },
    deleteManager(mgr) {
      console.log('manager deleted')
      console.log(JSON.stringify(mgr))
    },
    addService(obj) {
      console.log('service added')
      console.log(JSON.stringify(obj))
    },
    deleteService(svc) {
      console.log('service deleted')
      console.log(JSON.stringify(svc))
    }
  }
}
</script>

<style lang="scss">
.admin-dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .main-header {
    background-color: #ECEBEB;
    h1 {
      color: #84A7AE;
    }
  }
  .content {
    display: flex;
    padding: 4rem;
    .col {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .basic-table.services {
      margin-top: 4rem;
    }
  }
  
  @media (min-width: 1024px) {
    h1,
    h3 {
      text-align: left;
    }
  }
}
</style>