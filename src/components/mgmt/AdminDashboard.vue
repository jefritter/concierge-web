<template>
  <div class="admin-dashboard">
    <CustomHeader
      subtitle="Admin"/>
    <div class="content">
      <div class="col left">
        <BasicTable 
          id="managers"
          :columns="managerCols"
          :rowData="managers"
          title="Managers"/>
        <BasicTable
          id="services"
          :columns="serviceCols"
          :rowData="services"
          title="Services"/>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/shared/CustomHeader.vue'
import BasicTable from '@/components/shared/BasicTable.vue'
export default {
  components: {
    CustomHeader,
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