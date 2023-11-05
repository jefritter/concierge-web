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
          @addItem="addEvent"
          @deleteItem="deleteEvent"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/shared/CustomHeader.vue'
import NavBar from '@/components/shared/NavBar.vue'
import BasicTable from '@/components/shared/BasicTable.vue'
import ReservationTable from '@/components/shared/ReservationTable.vue'
export default {
  components: {
    CustomHeader,
    NavBar,
    BasicTable,
    ReservationTable
  },
  data() {
    return {
      eventsHomeLink: {
        to: '/events',
        text: 'Events Home'
      },
      eventsRows: [
        {
          title: 'La Scala Opera Trip',
          capacity: 40,
          contactName: 'Andy Cohen',
          contactEmail: 'andy1@mail.com',
          contactPhone: '555-123-4567',
          eventLocation: 'Opera House',
          descript: 'An evening at the La Scala Opera House.',
          startTime: '2023-10-20 19:30:00',
          endTime: '2023-10-20 23:00:00',
        },
        {
          title: 'Night Club Hop',
          capacity: 16,
          contactName: 'Joe Jackson',
          contactEmail: 'joe1@mail.com',
          contactPhone: '555-987-6543',
          eventLocation: 'Various Nightclubs',
          descript: 'A night of dancing and fun at the hottest nightclubs in town.',
          startTime: '2023-10-25 21:00:00',
          endTime: '2023-10-26 02:00:00',
        },
        {
          title: 'Wine Tasting Event',
          capacity: 36,
          contactName: 'Alice Johnson',
          contactEmail: 'alice1@mail.com',
          contactPhone: '555-123-7890',
          eventLocation: 'Vineyard Estates',
          descript: 'Join us for an evening of wine tasting and delicious appetizers.',
          startTime: '2023-11-05 18:00:00',
          endTime: '2023-11-05 21:00:00',
        },
        {
          title: 'Charity Gala',
          capacity: 156,
          contactName: 'Michael Smith',
          contactEmail: 'michael1@mail.com',
          contactPhone: '888-555-1234',
          eventLocation: 'Grand Ballroom',
          descript: 'An elegant charity gala to support a good cause with live music and fine dining.',
          startTime: '2023-12-10 19:00:00',
          endTime: '2023-12-10 23:00:00',
        },
        {
          title: 'Beach Bonfire Party',
          capacity: 40,
          contactName: 'Emily Davis',
          contactEmail: 'emily1@beachmail.com',
          contactPhone: '555-234-5678',
          eventLocation: 'Golden Beach',
          descript: 'Join us for a night of fun around the bonfire on the beach.',
          startTime: '2023-11-15 19:00:00',
          endTime: '2023-11-15 23:00:00',
        },
        {
          title: 'Poolside BBQ Bash',
          capacity: 60,
          contactName: 'David Wilson',
          contactEmail: 'david1@resortmail.com',
          contactPhone: '555-345-6789',
          eventLocation: 'Main Pool',
          descript: 'A BBQ party by the pool with great food and music.',
          startTime: '2023-11-18 14:00:00',
          endTime: '2023-11-18 18:00:00',
        },
        {
          title: 'Holiday Carnival',
          capacity: 80,
          contactName: 'Sarah Johnson',
          contactEmail: 'sarah1@celebrationmail.com',
          contactPhone: '555-456-7890',
          eventLocation: 'Resort Grounds',
          descript: 'Get into the holiday spirit with games, rides, and delicious treats.',
          startTime: '2023-11-23 11:00:00',
          endTime: '2023-11-23 17:00:00',
        },
        {
          title: 'Festive Luau',
          capacity: 50,
          contactName: 'Michael Smith',
          contactEmail: 'michael2@luau.com',
          contactPhone: '888-555-1234',
          eventLocation: 'Luau Pavilion',
          descript: 'Celebrate the season with a Hawaiian-themed luau featuring traditional dances and cuisine.',
          startTime: '2023-12-05 18:30:00',
          endTime: '2023-12-05 22:30:00',
        },
        {
          title: 'Holiday Movie Night',
          capacity: 30,
          contactName: 'Alice Johnson',
          contactEmail: 'alice2@holidaycinema.com',
          contactPhone: '555-987-6543',
          eventLocation: 'Resort Cinema',
          descript: 'Enjoy classic holiday films under the stars with popcorn and hot cocoa.',
          startTime: '2023-12-20 20:00:00',
          endTime: '2023-12-20 23:00:00',
        },
        {
          title: 'Snowy Ski Trip',
          capacity: 25,
          contactName: 'John Fritter',
          contactEmail: 'john1@snowyski.com',
          contactPhone: '555-234-5678',
          eventLocation: 'Mountain Lodge',
          descript: 'Hit the slopes and enjoy a snowy adventure with skiing and cozy cabins.',
          startTime: '2023-12-28 09:00:00',
          endTime: '2023-12-29 16:00:00',
        }
      ],
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
  methods: {
    addEvent(obj) {
      console.log('event added');
      console.log(JSON.stringify(obj));
    },
    deleteEvent(event) {
      console.log('event deleted');
      console.log(JSON.stringify(event));
    },
    updateReservation(obj) {
      console.log('reservation added')
      console.log(JSON.stringify(obj))
    },
    deleteReservation(res) {
      console.log('reservation deleted')
      console.log(JSON.stringify(res))
    },
  },
  beforeMount() {
    this.eventsRows.forEach(obj => {
      const descriptionLength = obj.descript?.length
      if (descriptionLength && descriptionLength > 15) {
        obj.descript = obj.descript.substring(0, 14) + '...'
      }
    })
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