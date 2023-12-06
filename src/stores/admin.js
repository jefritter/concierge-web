import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  id: 'admin',
  state: () => ({
    loadingManagers: false,
    managers: []
  }),
  getters: {
    getManagers: (state) => {
      return state.managers
    }
  },
  actions: {
    async fetchManagers() {
      this.loadingManagers = true
      try {
        this.managers = await fetch('/api/admin/managers').then((response) => response.json())
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingManagers = false;
      }
    }
  }
})
