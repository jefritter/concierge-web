<template>
  <div class="events-home">
    <CustomHeader title="My Concierge" subtitle="Special Events"/>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/services">Services</router-link>
    </nav>
    <main>
      <div class="left-column">
        <ReservationForm
          :fields="fields"
          @submitReservation="submitReservation"/>
        <div class="contact-box">
          <span>Contact Special Events: 555-222-7878</span>
        </div>
      </div>
      <div class="right-column">
        <div class="events-box">
          <h2>Upcoming Events</h2>
          <div v-for="(event, index) in events" :key="index" class="event-item">
            <h4 class="event-title">{{ event.title }}</h4>
            <p><strong>Reservations:</strong> <span>{{ event.reservations }}</span></p>
            <p><strong>Openings:</strong> <span>{{ event.openings }}</span></p>
            <p><strong>Transportation:</strong> <span>{{ event.transportation }}</span></p>
            <p><strong>Host:</strong> <span>{{ event.host }}</span></p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import CustomHeader from '@/components/shared/CustomHeader.vue';
  import ReservationForm from '@/components/shared/ReservationForm.vue'
  export default {
    components: {
      CustomHeader,
      ReservationForm
    },
    data() {
      return {
        events: [
          {
            id: 1,
            title: 'La Scala Opera Trip',
            reservations: 26,
            openings: 14,
            transportation: 'ABC Bus',
            host: 'Andy Cohen'
          },
          {
            id: 2,
            title: 'Night Club Hop',
            reservations: 10,
            openings: 6,
            transportation: 'XYZ Limo',
            host: 'Joe Jackson, Patty Smith'
          }
        ],
        fields: [
          {
            id: 'event',
            label: 'Event',
            type: 'multi-select',
            options: []
          },
          {
            id: 'name',
            label: 'Name',
            type: 'text'
          },
          {
            id: 'count',
            label: '# in party',
            type: 'number'
          }
        ]
      }
    },
    beforeMount() {
      this.fields[0].options = this.eventOptions
    },
    computed: {
      eventOptions() {
        return this.events.map((event) => {
          return {
            id: event.id,
            title: event.title
          }
        })
      }
    },
    methods: {
      submitReservation(values) {
        const isValid = this.validateInputs(values)
        if (isValid) {
          console.log('submitting')
        }
      },
      validateInputs(values) {
        return !!values
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/base.css';
  @import '@/assets/main.css';
  .events-home {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    nav {
      padding: 10px;
      text-align: center;
    }
    main {
      background-image: url('@/assets/special-event-table.webp');
      background-size: cover; 
      // background-repeat: no-repeat;
      // background-position: center center;
      // flex-grow: 1;
      display: flex;
      justify-content: space-around;
      padding: 20px;
      .right-column {
        flex-basis: 50%;
        margin: 150px;
        .events-box {
          background-color:white;
          padding: 10px;
          border-radius: 10px;
          h2 {
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
          }
          h2::after {
            content: "";
            display: block;
            width: 70%;
            height: 2px;
            background-color: #333;
            margin: 10px auto;
            content: "";
          }
          .event-item {
            margin-bottom: 20px;
            padding: 10px;
            margin-left: 100px;
          }
          .event-title {
            font-weight: bold;
            font-size: 1.2rem;
          }
        }
      }
      .left-column {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        margin: 150px;
        .reservation-box{
          background-color:white;
          flex-basis: 75%;
          padding: 10px;
          margin-bottom: 50px;
          border: 1px solid black;
        }
        .contact-box{
          background-color:white;
          flex-basis: 25%;
          padding: 10px;
          border: 1px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
          span{
            font-size: 20px;
          }
        }
      }
    }
  }
</style>

