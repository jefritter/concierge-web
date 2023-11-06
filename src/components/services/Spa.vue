<template>
  <div class="spa-home">
    <CustomHeader title="My Concierge" subtitle="Spa" />
    <NavBar />
    <div class="main-container">
      <div class="col1">
        <ReservationForm 
          :fields="fields"
          @submitReservation="submitReservation"
          />
        <div class="contact-container">
          <div class="contact">
            <h3>Contact the Spa: 555-222-5656</h3>
          </div>
        </div>
      </div>
      <div class="service-container">
        <div class="services">
          <div class="title">
            <h3>
              Spa Services
            </h3>
          </div>
          <div>
            <li v-for="(item, index) in services" :key="index">
              {{ item.title }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '../shared/CustomHeader.vue';
import NavBar from '@/components/shared/NavBar.vue';
import ReservationForm from '@/components/shared/ReservationForm.vue'
import { mapActions } from 'pinia'
import { mapState } from 'pinia'
import { useServicesStore } from '@/stores/services'

export default {
  components: {
    CustomHeader,
    NavBar,
    ReservationForm
  },
  data() {
    return {
      fields: [
        {
          id: 'date',
          label: 'Date',
          type: 'date'
        },
        {
          id: 'time',
          label: 'Time',
          type: 'time'
        },
        {
          id: 'name',
          label: 'Name',
          type: 'text'
        },
        {
          id: 'service',
          label: 'Service',
          type: 'multi-select',
          options: []
        }
      ]
    };
  },
  computed: {
    ...mapState(useServicesStore, {
      services: 'getSpaServices',
      loadingSpaServices: 'loadingSpaServices'
    })
  },
  beforeMount() {
    if (!this.services?.length && !this.loadingSpaServices) {
      this.fetchSpaServices()
    }
    this.fields[3].options = this.services
  },
  methods: {
    ...mapActions(useServicesStore, ['fetchSpaServices']),
    submitReservation(values) {
      const isValid = this.validateInputs(values)
      if (isValid) {
        console.log('submitting')
      }
    },
    validateInputs(values) {
      return !!values;
    }
  }
}
</script>
  
<style lang="scss">
.spa-home {
  background-size: cover;
  background-image: url("/src/assets/massage-therapy.jpg");
  min-height: 100vh;
  nav {
        margin: 0;
        padding: 12px;
        border-bottom: 1px solid black;
        background-color: white;
        text-align: center;
    }

  .main-container {
    display: flex;
    gap: 6rem;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 8em;
    .col1 {
      flex-basis: 50%;
    }
    .service-container {
      background-color: white;
      border-radius: 10px;
      flex-basis: 40%;
      .services h3 {
        font-size: x-large;
        text-align: center;
        color: black;
        padding: 10px;
      }
      .services h3:after {
        content: ' ';
        display: block;
        border: 1px solid black;
        width: 50%;
        margin-inline: auto;
        margin-block: 6px;
      }
      .services li {
        color: black;
        list-style-type: none;
        text-align: center;
        line-height: 3em;
        font-size: large;
      }
    }
    .contact-container {
      background-color: white;
      max-width: 560px;
      padding: 1em;
      border: solid 1px black;
      margin-top: 1em;
      .contact h3 {
        text-align: center;
        color: black;
      }
    }
  }

  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
    text-align: center;
  }

  @media (max-width: 767px) {
    .form-container,
    .service-container,
    .contact-container {
      width: 300px;
      margin: 1em;
    }
  }

  @media (max-width: 1400px) {
    .main-container {
      padding: 4rem;
      gap: 3rem;
    }
  }
}
</style>