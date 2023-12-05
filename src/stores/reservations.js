import { defineStore } from 'pinia'

export const useReservationsStore = defineStore({
  id: 'reservations',
  state: () => ({
    loadingDiningReservations: false,
    loadingEventReservations: false,
    reservationsDining: [],
    reservationsEvents: [],
    reservationsSpa: [],
    loadingEvents: false
  }),
  getters: {
    getDiningReservations: (state) => {
      return state.reservationsDining
    },
    getEventsReservations: (state) => {
      return state.reservationsEvents
    },
    getSpaReservations: (state) => {
      return state.reservationsSpa
    },
    getLoadingEventReservations: (state) => {
      return state.loadingEventReservations
    }
  },
  actions: {
    async addDiningReservation(params) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      }
      try {
        await fetch('/api/reservation/dining', requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status <= 300) {
              alert(`Reservations successfully added`)
              this.fetchDiningReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async updateDiningReservation(params) {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      }
      try {
        await fetch('/api/reservation/dining', requestOptions)
          .then((response) => {
            if (response.status === 200) {
              alert(`Reservation successfully updated`)
              this.fetchDiningReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async deleteDiningReservation(id) {
      if (!id) {
        console.log('id required to delete event')
        return
      }
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
      }
      try {
        await fetch(`/api/reservation/dining`, requestOptions)
          .then((response) => {
            if (response.status === 202) {
              alert(`Reservation successfully deleted`)
              this.fetchDiningReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDiningReservations() {
      this.loadingDiningReservations = true
      try {
        await fetch('/api/reservation/dining')
          .then((response) => response.json())
          .then(({ data }) => {
            if (data) {
              this.reservationsDining = data
            }
          })
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingDiningReservations = false;
      }
    },
    async fetchEventReservations() {
      this.loadingEventsReservations = true
      try {
        await fetch('/api/reservation/event')
          .then((response) => response.json())
          .then(({ data }) => {
            if (data) {
              this.reservationsEvents = data
            }
          })
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingEventsReservations = false;
      }
    }
  }
})
