import { defineStore } from 'pinia'

export const useSpaStore = defineStore({
  id: 'services',
  state: () => ({
    loadingSpaServices: false,
    spaServices: []
  }),
  getters: {
    getSpaServices: (state) => {
      return state.spaServices
    }
  },
  actions: {
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
