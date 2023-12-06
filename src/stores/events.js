import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', {
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
    async addEvent(event) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      }
      try {
        await fetch('/api/events', requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status <= 300) {
              alert(`${event.title} successfully added`)
              this.fetchEvents()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
    async deleteEvent(event) {
      if (!event?.id) {
        console.log('id required to delete event')
        return
      }
      try {
        await fetch(`/api/events?id=${event.id}`, { method: 'DELETE' })
          .then((response) => {
            if (response.status === 200) {
              alert(`${event.title} successfully deleted`)
              this.fetchEvents()
            }
          })
          
      } catch (error) {
        console.log(error)
      }
    },
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
