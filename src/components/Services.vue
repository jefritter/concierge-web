<template>
  <div class="services-page">
    <CustomHeader />
    <NavBar />

    <div class="page-content">
      <h2>Services</h2>
      <div class="service-boxes">
        <router-link to="/dining" class="dining-box">
          <p class="box-label">Dining</p>
        </router-link>
        <router-link to="/spa" class="spa-box">
          <p class="box-label">Spa</p>
        </router-link>
        <router-link to="/events" class="events-box">
          <p class="box-label">Special Events</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomHeader from '@/components/shared/CustomHeader.vue'
  import NavBar from '@/components/shared/NavBar.vue'

  export default {
    name: 'Services',
    components: {
    NavBar,
    CustomHeader,
    }
  }
</script>

<style lang="scss">
  .services-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    .page-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #ECEBEB;

      h2 {
        margin-top: 2rem;
      }

      .service-boxes {
        display: flex;
        justify-content: space-around;
        flex-grow: 1;
        width: 100vw;
        padding: 0.5% 3% 8% 3%;

        .dining-box, .spa-box, .events-box {
          background-size: cover;
          background-position: center center;
          min-width: 100px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          flex-basis: 30%;
          margin: 3%;
          border-radius: 10%;
        }

        .dining-box {
          background-image: url("@/assets/fine-dining.jpg");
        }

        .spa-box {
          background-image: url("@/assets/massage-therapy.jpg");
        }

        .events-box {
          background-image: url('@/assets/special-event-table.webp');
        }

        .box-label {
          margin-bottom: 5%;
          font-size: 2rem;
          width: 100%;
          text-align: center;
          background-color: rgba(255,255,255,0.4);
        }

        .dining-box:hover .box-label, 
        .spa-box:hover .box-label, 
        .events-box:hover .box-label {
          text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
        }
      }
    }
  }
</style>