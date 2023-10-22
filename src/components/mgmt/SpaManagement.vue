<template>
  <div class="spa-management">
    <CustomHeader
      subtitle="Admin"/>
    <h2>Spa Management</h2>
    <div class="content">
      <div class="col left">
        <ReservationTable 
          id="spa-res"
          :columns="resCols"
          :rowData="reservations"
          title="Reservations"
          @updateItem="updateReservation"
          @deleteItem="deleteReservation"/>
      </div>
      <div>
        <BasicTable
          id="spa-services"
          :columns="serviceCols"
          :rowData="services"
          :showColumns="false"
          title="Spa Services"
          @addItem="addService"
          @deleteItem="deleteService"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/shared/CustomHeader.vue'
import BasicTable from '@/components/shared/BasicTable.vue'
import ReservationTable from '@/components/shared/ReservationTable.vue'
export default {
  components: {
    CustomHeader,
    BasicTable,
    ReservationTable
  },
  data() {
    return {
      reservations: [
        {
          date: '1/2/24',
          time: '10:00am',
          duration: 60,
          service: 'swedish massage',
          client: 'Jane Doe',
          staff: 'Nancy Drew'
        },
        {
          date: '1/2/24',
          time: '11:00am',
          duration: 60,
          service: 'hot stone massage',
          client: 'John Smith',
          staff: 'Sally Good'
        },
        {
          date: '1/2/24',
          time: '2:30am',
          duration: 30,
          service: 'pedicure',
          client: 'Mary Jackson',
          staff: 'Shari Samson'
        }
      ],
      resCols: [
        {
          id: 'date',
          label: 'Date'
        },
        {
          id: 'time',
          label: 'Time'
        },
        {
          id: 'duration',
          label: 'Duration'
        },
        {
          id: 'service',
          label: 'Service'
        },
        {
          id: 'client',
          label: 'Client'
        },
        {
          id: 'staff',
          label: 'Staff Member'
        }
      ],
      services: [
        {
          service: 'Hot Stone Massage'
        },
        {
          service: 'Sport Massage'
        },
        {
          service: 'Swedish Massage'
        },
        {
          service: 'Reflexology'
        },
        {
          service: 'Facial'
        },
        {
          service: 'Manicure'
        },
        {
          service: 'Pedicure'
        }
      ],
      serviceCols: [
        {
          id: 'service',
          label: 'Service'
        }
      ]
    }
  },
  methods: {
    updateReservation(obj) {
      console.log('manager added')
      console.log(JSON.stringify(obj))
    },
    deleteReservation(res) {
      console.log('manager deleted')
      console.log(JSON.stringify(res))
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
.spa-management {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .main-header {
    background-color: #ECEBEB;
    h1 {
      color: #84A7AE;
    }
  }
  h2 {
    margin-top: 3rem;
  }
  .content {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    margin: 0 auto;
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
  
  @media (max-width: 1208px) {
    .content {
      gap: 2rem;
      padding: 4rem 2rem;
    }
  }
}
</style>