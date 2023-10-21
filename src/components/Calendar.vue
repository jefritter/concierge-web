<template>
  <div class="calendar-page">
    <CustomHeader />
    <NavBar />
    <main>
      <div class="calendar-container">
        <FullCalendar
          class="fc"
          ref="calendar"
          :options="calendarOptions"
          @dateClick="handleDateClick"
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

  export default {
    name: 'Calendar',
    components: {
      NavBar,
      CustomHeader,
      FullCalendar
    },
    data(){
      return{
        calendarOptions:{
          plugins: [dayGridPlugin],
          initialView: 'dayGridMonth',
          fixedWeekCount: false,
          aspectRatio: 3
        }
      };
    },
    methods: {
      handleDateClick(info) {
        this.$refs.calendar.getApi().changeView('dayGridDay', info.dateStr);
      },
      handleEventClick(info) {
        if (info.event.url) {
          this.$router.push(info.event.url);
        }
      },
    },
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
        height:75vh;
        width:95vw;
        overflow-y: auto;
      }
    }
  }
</style>