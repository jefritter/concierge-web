import { defineStore } from 'pinia'

export const useServicesStore = defineStore({
  id: 'services',
  state: () => ({
    events: [],
    loadingEvents: false,
    loadingSpaServices: false,
    spaServices: [],
  }),
  getters: {
    getEvents: (state) => {
      return state.events
    },
    getSpaServices: (state) => {
      return state.spaServices
    }
  },
  actions: {
    async fetchEvents() {
      this.loadingEvents = true
      try {
        await fetch('/api/events/all')
          .then((response) => response.json())
          .then(({ data }) => (
            this.events = data
          ))
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingEvents = false;
      }
    },
    async fetchSpaServices() {
      this.loadingSpaServices = true
      try {
        await fetch('/api/spa/services')
          .then((response) => response.json())
          .then(({ data }) => (
            this.spaServices = data
          ))
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingSpaServices = false;
      }
    }
  }
})
