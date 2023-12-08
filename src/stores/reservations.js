import { defineStore } from 'pinia'

export const useReservationsStore = defineStore('reservations', {
  id: 'reservations',
  state: () => ({
    loadingDiningReservations: false,
    loadingEventReservations: false,
    loadingSpaReservations: false,
    reservationsDining: [],
    reservationsEvents: [],
    reservationsSpa: []
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
    getLoadingDiningReservations: (state) => {
      return state.loadingDiningReservations
    },
    getLoadingEventReservations: (state) => {
      return state.loadingEventReservations
    },
    getLoadingSpaReservations: (state) => {
      return state.loadingSpaReservations
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
        console.log('id required to delete reservation')
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
            if (response.status === 200) {
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
              const sorted = data.toSorted((a, b) => a.id - b.id)
              this.reservationsDining = sorted
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
              const sorted = data.sort((a, b) => a.id - b.id)
              this.reservationsEvents = sorted
            }
          })
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingEventsReservations = false;
      }
    },
    async addEventReservation(params) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      }
      try {
        await fetch('/api/reservation/event', requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status <= 300) {
              alert(`Reservations successfully added`)
              this.fetchEventReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async updateEventReservation(params) {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      }
      try {
        await fetch('/api/reservation/event', requestOptions)
          .then((response) => {
            if (response.status === 200) {
              alert(`Reservation successfully updated`)
              this.fetchEventReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async deleteEventReservation(id) {
      if (!id) {
        console.log('id required to delete reservation')
        return
      }
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
      }
      try {
        await fetch(`/api/reservation/event`, requestOptions)
          .then((response) => {
            if (response.status === 200) {
              alert(`Reservation successfully deleted`)
              this.fetchEventReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async fetchSpaReservations() {
      this.loadingSpaReservations = true
      try {
        await fetch('/api/reservation/spa')
          .then((response) => response.json())
          .then(({ data }) => {
            if (data) {
              const sorted = data.sort((a, b) => a.res_start_time - b.res_start_time)
              this.reservationsSpa = sorted
            }
          })
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingSpaReservations = false;
      }
    },
    async addSpaReservation(params) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      }
      try {
        await fetch('/api/reservation/spa', requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status <= 300) {
              alert(`Reservations successfully added`)
              this.fetchSpaReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async updateSpaReservation(params) {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      }
      try {
        await fetch('/api/reservation/spa', requestOptions)
          .then((response) => {
            if (response.status === 200) {
              alert(`Reservation successfully updated`)
              this.fetchSpaReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async deleteSpaReservation(id) {
      if (!id) {
        console.log('id required to delete reservation')
        return
      }
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
      }
      try {
        await fetch(`/api/reservation/spa`, requestOptions)
          .then((response) => {
            if (response.status === 200) {
              alert(`Reservation successfully deleted`)
              this.fetchSpaReservations()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    }
  }
})
