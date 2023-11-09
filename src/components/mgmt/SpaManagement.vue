<template>
  <div class="spa-management">
    <CustomHeader
      subtitle="Admin"/>
    <NavBar class="navbar" :additionalLink="spaHomeLink" />
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
          :rowData="servicesRowData"
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
import NavBar from '@/components/shared/NavBar.vue';
import { mapActions } from 'pinia'
import { mapState } from 'pinia'
import { useSpaStore } from '@/stores/spa'

export default {
  components: {
    CustomHeader,
    BasicTable,
    ReservationTable,
    NavBar
  },
  beforeMount() {
    this.fetchSpaServices()
  },
  data() {
    return {
      spaHomeLink: {
        to: '/spa',
        text: 'Spa Home'
      },
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
      serviceCols: [
        {
          id: 'service',
          label: 'Service'
        },
        {
          id: 'descript',
          label: 'Description'
        }
      ]
    }
  },
  computed: {
    ...mapState(useSpaStore, {
      services: 'getSpaServices'
    }),
    servicesRowData() {
      return this.services.map(svc => {
        return { 
          'id': svc.id,
          'service': svc.title,
          'descript': svc.descript
        }
      })
    }
  },
  methods: {
    ...mapActions(useSpaStore, ['addSpaService', 'deleteSpaService', 'fetchSpaServices']),
    updateReservation(obj) {
      console.log('manager added')
      console.log(JSON.stringify(obj))
    },
    deleteReservation(res) {
      console.log('manager deleted')
      console.log(JSON.stringify(res))
    },
    addService(inputs) {
      const newService = {
        title: inputs.service,
        descript: inputs.descript
      }
      this.addSpaService(newService)
    },
    deleteService(svc) {
      this.deleteSpaService(svc)
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