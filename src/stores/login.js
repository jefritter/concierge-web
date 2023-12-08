import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  id: 'login',
  state: () => ({
    isAdmin: false,
    isManager: false,
    loggedIn: false,
    deptPermissions: []
  }),
  getters: {
    getIsAdmin: (state) => {
      return state.isAdmin
    },
    getIsManager: (state) => {
      return state.isManager
    },
    getLoggedIn: (state) => {
      return state.loggedIn
    },
    getDeptPermissions: (state) => {
      return state.deptPermissions
    }
  },
  actions: {
    async login(args) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args)
      }
      try {
        await fetch('/api/login', requestOptions)
        .then((response) => response.json())
        .then(({ data }) => {
          if (data) {
            this.loggedIn = true
            this.isAdmin = data.is_admin
            this.isManager = data.is_manager
            this.deptPermissions = data.dept ? data.dept : []
            return true
          } else {
            this.isAdmin = false
            this.isManager = false
            this.loggedIn = false
            return false
          }
        })
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})