<script>
  import CustomHeader from '@/components/shared/CustomHeader.vue';
  export default {
    components: {
      CustomHeader,
    },
    data() {
       return {
          msg: 'Work in Progress ...'
       }
   }
  }
</script>

<template>
  <div class="events-home">
    <CustomHeader title="My Concierge" subtitle="Events"/>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/services">Services</router-link>
    </nav>

    <main>
      <div class="left-column">
        <div class="reservation-box">
          <span>placeholder for reservation form</span>
        </div>
        <div class="contact-box">
          <span>Contact Special Events: 555-222-7878</span>
        </div>
      </div>
      <div class="right-column">
        <div class="events-box">
          <span>Upcoming Events</span>
        </div>
      </div>
    </main>
  </div>
</template>
  
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
      background-repeat: no-repeat;
      background-position: center center;
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      padding: 20px;

      .right-column {
        flex-basis: 50%;
        margin: 150px;

        .events-box {
          background-color:white;
          padding: 10px;
          border-radius: 10px;
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

