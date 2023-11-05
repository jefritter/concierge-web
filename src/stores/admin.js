import { defineStore } from 'pinia'

export const useAdminStore = defineStore({
  id: 'admin',
  state: () => ({
    events: [],
    loadingEvents: false,
    loadingManagers: false,
    managers: [],
    spaServices: []
  }),
  getters: {
    getEvents: (state) => {
      return state.events
    },
    getManagers: (state) => {
      return state.managers
    },
    getSpaServices: (state) => {
      return state.spaServices
    }
  },
  actions: {
    async fetchEvents() {
      this.loadingEvents = true
      try {
        this.events = await fetch('/api/events/all').then((response) => response.json())
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingEvents = false;
      }
    },
    async fetchManagers() {
      this.loadingManagers = true
      try {
        this.managers = await fetch('/api/admin/managers').then((response) => response.json())
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingManagers = false;
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
