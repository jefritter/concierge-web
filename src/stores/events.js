import { defineStore } from 'pinia'

export const useEventsStore = defineStore({
  id: 'events',
  state: () => ({
    events: [],
    loadingEvents: false
  }),
  getters: {
    getEvents: (state) => {
      return state.events
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
    }
  }
})
