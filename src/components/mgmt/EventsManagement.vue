<template>
  <div class="events-management">
    <CustomHeader subtitle="Admin" />
    <NavBar class="nav" :additionalLink="eventsHomeLink"/>
    <h2>Special Events Management</h2>
    <div class="content">
      <div class="col-left">
        <ReservationTable 
          id="events-res"
          :columns="resCols"
          :rowData="resRows"
          title="Reservations"
          @updateItem="updateReservation"
          @deleteItem="deleteReservation"/>
      </div>
      <div class="col-right">
        <BasicTable
          id="events-table"
          :columns="eventsCols"
          :rowData="eventsRows"
          title="Events"
          @addItem="handleAddEvent"
          @deleteItem="handleDeleteEvent"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/shared/CustomHeader.vue'
import NavBar from '@/components/shared/NavBar.vue'
import BasicTable from '@/components/shared/BasicTable.vue'
import ReservationTable from '@/components/shared/ReservationTable.vue'
import { mapActions, mapState } from 'pinia'
import { useEventsStore } from '@/stores/events'

export default {
  components: {
    CustomHeader,
    NavBar,
    BasicTable,
    ReservationTable
  },
  data() {
    return {
      eventsCols: [
        {
          id: 'title',
          label: 'Title',
        },
        {
          id: 'capacity',
          label: 'Capacity',
        },
        {
          id: 'contactName',
          label: 'Contact Name',
        },
        {
          id: 'contactEmail',
          label: 'Contact Email',
        },
        {
          id: 'contactPhone',
          label: 'Contact Phone',
        },
        {
          id: 'eventLocation',
          label: 'Event Location',
        },
        {
          id: 'descript',
          label: 'Description',
        },
        {
          id: 'startTime',
          label: 'Start Time',
        },
        {
          id: 'endTime',
          label: 'End Time',
        }
      ],
      resCols: [
        {
          id: 'date',
          label: 'Date'
        },
        {
          id: 'event-name',
          label: 'Event'
        },
        {
          id: 'client',
          label: 'Client'
        }
      ],
      resRows: [
        {
          'event-name': 'La Scala Opera Trip',
          client: 'John Doe',
          date: '2023-10-20 19:30:00'
        },
        {
          'event-name': 'Night Club Hop',
          client: 'Jane Smith',
          date: '2023-10-26 02:00:00'
        },
        {
          'event-name': 'Wine Tasting Event',
          client: 'Robert Johnson',
          date: '2023-11-05 18:00:00'
        },
        {
          'event-name': 'Charity Gala',
          client: 'Emily Davis',
          date: '2023-12-10 19:00:00'
        },
        {
          'event-name': 'Beach Bonfire Party',
          client: 'Michael Wilson',
          date: '2023-11-15 19:00:00'
        }
      ]
    }
  },
  computed: {
    ...mapState(useEventsStore, {
      events: 'getEvents',
      loadingEvents: 'loadingEvents'
    }),
    eventsRows() {
      return this.events.map(event => {
        return {
          id: event.id,
          title: event.title,
          capacity: event.capacity,
          contactName: event.contact_name,
          contactEmail: event.contact_email,
          contactPhone: event.contact_phone,
          eventLocation: event.event_location,
          descript: this.parseDescription(event.descript),
          startTime: event.start_time,
          endTime: event.end_time
        }
      })
    }
  },
  methods: {
    ...mapActions(useEventsStore, ['addEvent', 'deleteEvent', 'fetchEvents']),
    handleAddEvent(inputs) {
      this.addEvent(inputs)
    },
    handleDeleteEvent(event) {
      this.deleteEvent({
        id: event.id,
        title: event.title
      })
    },
    updateReservation(obj) {
      console.log('reservation added')
      console.log(JSON.stringify(obj))
    },
    deleteReservation(res) {
      console.log('reservation deleted')
      console.log(JSON.stringify(res))
    },
    parseDescription(desc) {
      let result = ''
      const descriptionLength = desc?.length
      if (descriptionLength && descriptionLength > 15) {
        result = desc.substring(0, 14) + '...'
      }
      return result
    }
  },
  beforeMount() {
    if (!this.loadingEvents) {
      this.fetchEvents()
    }
  },
}
</script>

<style lang="scss">
.events-management{
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
    .col-left, .col-right {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .basic-table {
      th.capacity, td.capacity{
        width:7rem;
      }
      th.contactPhone, td.contactPhone, 
      th.eventLocation, td.eventLocation, 
      th.contactName, td.contactName,
      th.descript, td.descript{
        width: 10rem;
      }
      
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