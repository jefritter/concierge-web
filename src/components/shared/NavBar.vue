<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/services">Services</router-link>
      <router-link v-if="showDiningMgmt" to="/mgmt/dining">Dining Mgmt</router-link>
      <router-link v-if="showEventsMgmt" to="/mgmt/events">Events Mgmt</router-link>
      <router-link v-if="showSpaMgmt" to="/mgmt/spa">Spa Mgmt</router-link>
      <router-link v-if="additionalLink" :to="additionalLink.to">{{ additionalLink.text }}</router-link>
    </nav>
  </div>
</template>
  
<script>
import { mapState } from 'pinia'
import { useLoginStore } from '@/stores/login'
export default {
  name: 'NavBar',
  props: {
    additionalLink: Object
  },
  computed: {
    ...mapState(useLoginStore, ['isAdmin', 'isManager', 'loggedIn', 'deptPermissions']),
    showAdminDashboard() {
      return this.isAdmin
    },
    showDiningMgmt() {
      return this.isAdmin || (this.isManager && this.deptPermissions.includes('dining'))
    },
    showEventsMgmt() {
      return this.isAdmin || (this.isManager && this.deptPermissions.includes('events'))
    },
    showSpaMgmt() {
      return this.isAdmin || (this.isManager && this.deptPermissions.includes('spa'))
    }
  }
}
</script>
  
<style>
  nav {
    display: flex;
    padding: 10px;
    justify-content: center;
    background-color:white;
    width: 100vw;
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
</style>