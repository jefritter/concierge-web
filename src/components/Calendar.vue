<template>
  <div class="calendar-page">
    <CustomHeader />
    <NavBar />
    <main>
      <div class="calendar-container">
        <FullCalendar
          class="fc"
          ref="fullCalendar"
          :options="calendarOptions"
          @eventClick="handleEventClick"
        />
      </div>
    </main>
  </div>
</template>

<script>
  import CustomHeader from '@/components/shared/CustomHeader.vue';
  import NavBar from '@/components/shared/NavBar.vue';
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import interactionPlugin from '@fullcalendar/interaction';

  export default {
    name: 'Calendar',
    components: {
      NavBar,
      CustomHeader,
      FullCalendar
    },
    computed:{
      calendarOptions(){
        return {
          plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
          initialView: 'dayGridMonth',
          fixedWeekCount: false,
          aspectRatio: 3,
          initialEvents: this.calendarEvents,
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }
        }
      }
    },
    data(){
      return {
        calendarEvents: [
          {
            title: 'La Scala Opera Trip',
            start: '2023-10-20 19:30:00',
            end: '2023-10-20 23:00:00',
            url: '/events'
          },
          {
            title: 'Night Club Hop',
            start: '2023-10-25 21:00:00',
            end: '2023-10-26 02:00:00',
            url: '/events'
          },
          {
            title: 'Wine Tasting Event',
            start: '2023-11-05 18:00:00',
            end: '2023-11-05 21:00:00',
            url: '/events'
          },
          {
            title: 'Charity Gala',
            start: '2023-12-10 19:00:00',
            end: '2023-12-10 23:00:00',
            url: '/events'
          },
          {
            title: 'Beach Bonfire Party',
            start: '2023-11-15 19:00:00',
            end: '2023-11-15 23:00:00',
            url: '/events'
          },
          {
            title: 'Poolside BBQ Bash',
            start: '2023-11-18 14:00:00',
            end: '2023-11-18 18:00:00',
            url: '/events'
          },
          {
            title: 'Holiday Carnival',
            start: '2023-11-23 11:00:00',
            end: '2023-11-23 17:00:00',
            url: '/events'
          },
          {
            title: 'Festive Luau',
            start: '2023-12-05 18:30:00',
            end: '2023-12-05 22:30:00',
            url: '/events'
          },
          {
            title: 'Holiday Movie Night',
            start: '2023-12-20 20:00:00',
            end: '2023-12-20 23:00:00',
            url: '/events'
          },
          {
            title: 'Snowy Ski Trip',
            start: '2023-12-28 09:00:00',
            end: '2023-12-29 16:00:00',
            url: '/events'
          },
        ]
      }
    },
    methods: {
      handleEventClick(eventObj){
        const eventUrl = eventObj.url;
        this.$router.push({ path: eventUrl });
      }
    }
  }
</script>

<style>
  .calendar-page{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ECEBEB;

    .calendar-container{
      height: 80vh;
      margin-top: 20px;
      .fc{
        background-color: white;
        height:76vh;
        width:95vw;
        overflow-y: auto;
        border: 2px solid #000;
      }
    }
  }
</style>