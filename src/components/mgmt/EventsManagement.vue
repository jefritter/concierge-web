<template>
  <div class="events-management">
    <CustomHeader subtitle="Admin" />
    <NavBar class="nav" />
    <h2>Special Events Management</h2>
    <div class="content">
      <div class="col left">
        <ReservationTable 
          id="events-res"
          :columns="resCols"
          :rowData="resRows"
          title="Reservations"
          @updateItem="updateReservation"
          @deleteItem="deleteReservation"/>
      </div>
      <div>
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
      eventsRows: [
        {
          title: 'La Scala Opera Trip',
          capacity: 40,
          contact_name: 'Andy Cohen',
          contact_email: 'andy1@mail.com',
          contact_phone: '555-123-4567',
          event_location: 'Opera House',
          descript: 'An evening at the La Scala Opera House.',
          start_time: '2023-10-20 19:30:00',
          end_time: '2023-10-20 23:00:00',
        },
        {
          title: 'Night Club Hop',
          capacity: 16,
          contact_name: 'Joe Jackson',
          contact_email: 'joe1@mail.com',
          contact_phone: '555-987-6543',
          event_location: 'Various Nightclubs',
          descript: 'A night of dancing and fun at the hottest nightclubs in town.',
          start_time: '2023-10-25 21:00:00',
          end_time: '2023-10-26 02:00:00',
        },
        {
          title: 'Wine Tasting Event',
          capacity: 36,
          contact_name: 'Alice Johnson',
          contact_email: 'alice1@mail.com',
          contact_phone: '555-123-7890',
          event_location: 'Vineyard Estates',
          descript: 'Join us for an evening of wine tasting and delicious appetizers.',
          start_time: '2023-11-05 18:00:00',
          end_time: '2023-11-05 21:00:00',
        },
        {
          title: 'Charity Gala',
          capacity: 156,
          contact_name: 'Michael Smith',
          contact_email: 'michael1@mail.com',
          contact_phone: '888-555-1234',
          event_location: 'Grand Ballroom',
          descript: 'An elegant charity gala to support a good cause with live music and fine dining.',
          start_time: '2023-12-10 19:00:00',
          end_time: '2023-12-10 23:00:00',
        },
        {
          title: 'Beach Bonfire Party',
          capacity: 40,
          contact_name: 'Emily Davis',
          contact_email: 'emily1@beachmail.com',
          contact_phone: '555-234-5678',
          event_location: 'Golden Beach',
          descript: 'Join us for a night of fun around the bonfire on the beach.',
          start_time: '2023-11-15 19:00:00',
          end_time: '2023-11-15 23:00:00',
        },
        {
          title: 'Poolside BBQ Bash',
          capacity: 60,
          contact_name: 'David Wilson',
          contact_email: 'david1@resortmail.com',
          contact_phone: '555-345-6789',
          event_location: 'Main Pool',
          descript: 'A BBQ party by the pool with great food and music.',
          start_time: '2023-11-18 14:00:00',
          end_time: '2023-11-18 18:00:00',
        },
        {
          title: 'Holiday Carnival',
          capacity: 80,
          contact_name: 'Sarah Johnson',
          contact_email: 'sarah1@celebrationmail.com',
          contact_phone: '555-456-7890',
          event_location: 'Resort Grounds',
          descript: 'Get into the holiday spirit with games, rides, and delicious treats.',
          start_time: '2023-11-23 11:00:00',
          end_time: '2023-11-23 17:00:00',
        },
        {
          title: 'Festive Luau',
          capacity: 50,
          contact_name: 'Michael Smith',
          contact_email: 'michael2@luau.com',
          contact_phone: '888-555-1234',
          event_location: 'Luau Pavilion',
          descript: 'Celebrate the season with a Hawaiian-themed luau featuring traditional dances and cuisine.',
          start_time: '2023-12-05 18:30:00',
          end_time: '2023-12-05 22:30:00',
        },
        {
          title: 'Holiday Movie Night',
          capacity: 30,
          contact_name: 'Alice Johnson',
          contact_email: 'alice2@holidaycinema.com',
          contact_phone: '555-987-6543',
          event_location: 'Resort Cinema',
          descript: 'Enjoy classic holiday films under the stars with popcorn and hot cocoa.',
          start_time: '2023-12-20 20:00:00',
          end_time: '2023-12-20 23:00:00',
        },
        {
          title: 'Snowy Ski Trip',
          capacity: 25,
          contact_name: 'John Fritter',
          contact_email: 'john1@snowyski.com',
          contact_phone: '555-234-5678',
          event_location: 'Mountain Lodge',
          descript: 'Hit the slopes and enjoy a snowy adventure with skiing and cozy cabins.',
          start_time: '2023-12-28 09:00:00',
          end_time: '2023-12-29 16:00:00',
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
          id: 'contact_name',
          label: 'Contact Name',
        },
        {
          id: 'contact_email',
          label: 'Contact Email',
        },
        {
          id: 'contact_phone',
          label: 'Contact Phone',
        },
        {
          id: 'event_location',
          label: 'Event Location',
        },
        {
          id: 'descript',
          label: 'Description',
        },
        {
          id: 'start_time',
          label: 'Start Time',
        },
        {
          id: 'end_time',
          label: 'End Time',
        }
      ],
      resCols: [
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
          client: 'John Doe'
        },
        {
          'event-name': 'Night Club Hop',
          client: 'Jane Smith'
        },
        {
          'event-name': 'Wine Tasting Event',
          client: 'Robert Johnson'
        },
        {
          'event-name': 'Charity Gala',
          client: 'Emily Davis'
        },
        {
          'event-name': 'Beach Bonfire Party',
          client: 'Michael Wilson'
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
  .nav{
    border-top: 2px solid black;
    border-bottom: 2px solid black;
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