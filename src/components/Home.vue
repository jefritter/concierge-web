<template>
  <div class="main-homepage">
    <CustomHeader title="My Concierge" subtitle=""/>
    <NavBar />
    <main>
      <div class="my-res">
        <h2>My Reservations</h2>
        <h3>Today</h3>
        <div v-for="(res, index) in reservationsToday" :key="index">
          <p>{{ resDetails(res) }}<span v-if="res.groupCount>1">{{ groupCountDetails(res.groupCount) }}</span></p>
        </div>
        <h3>Upcoming</h3>
        <div v-for="(res, index) in reservationsUpcoming" :key="index">
          <p>{{res.title}}: {{res.time}}<span v-if="res.groupCount>1">{{res.groupCount}} ppl</span></p>
        </div>
      </div>
      <div class="todays-events">
        <h2>Today's Events</h2> 
        <p v-for="(event, index) in events" :key="index">{{ event }}</p>
      </div>
    </main>
  </div>
</template>

<script>
  import CustomHeader from './shared/CustomHeader.vue'
  import NavBar from '@/components/shared/NavBar.vue';
  import dayjs from  'dayjs'

  export default {
    name: 'Home',
    components: {
      NavBar,
      CustomHeader,
    },
    data() {
      return {
        events: [
          'Pool Hours: 9:00-9:00',
          'Spa Hours: 9:00-6:00',
          'PickleBall Tournament 1:00-4:00',
          'Swing Dance in Ballroom 4',
          'Dinner Reservations Available Tonight'
        ],
        today: null,
        reservations: [
          {
            title: 'Dinner',
            date: null,
            time: '6:00pm',
            groupCount: 4
          },
          {
            title: 'Sport Massage',
            date: null,
            time: '1:00pm',
            groupCount: 1
          }
        ],
        users: []
      }
    },
    beforeMount() {
      this.today = dayjs(new Date())
      this.reservations[0].date = this.today;
      this.reservations[1].date = this.today.add(1, 'day')
    },
    computed: {
      hasUserData() {
        return this.users.length > 0
      },
      reservationsToday() {
        return this.reservations.filter((res) => { 
          return res.date.isSame(this.today, 'day')
        })
      },
      reservationsUpcoming() {
        return this.reservations.filter((res) => { 
          return res.date.isAfter(this.today, 'day') 
        })
      }
    },
    methods: {
      resDetails(res) {
        return `${res.title}: ${res.time} `
      },
      groupCountDetails(count) {
        return `${count} ppl`
      }
    }
  }
</script>
  
<style lang="scss">

.main-homepage {
  background-size: cover;
  background-image: url("/src/assets/resort-entrance.jpg");
  min-height: 100vh;  
  main {
    display: flex;
    justify-content: space-between;
    padding: 6rem;
    gap: 6rem;
    height: 80vh;
    .my-res,
    .todays-events {
      background-color: white;
      border-radius: 12px;
      flex-grow: 1;
      font-family: 'Roboto', Arial, sans-serif;
      font-size: 24px;
      height: 100%;
      opacity: 0.8;
      padding: 20px;
      text-align: center;
      h2 {
        border-bottom: 2px solid black;
        color: black;
        font-family: 'Manrope', Arial, sans-serif;
        font-size: 32px;
        font-weight: 600;
        text-align: center;
      }
      h3 {
        font-size: 24px;
        font-weight: 600;
        margin-top: 40px;
      }
    }
    .todays-events {
      margin-left: 20px;
      h2 {
        margin-bottom: 40px;
      }
      p {
        margin-bottom: 10px;
      }
    }
  }
  @media (max-width: 1200px) {
    main {
      gap: 4rem;
      padding: 4rem;
    }
  }
}
</style>
