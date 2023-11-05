<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/services">Services</router-link>
      <router-link v-if="additionalLink" :to="additionalLink.to">{{ additionalLink.text }}</router-link>
    </nav>
  </div>
</template>
  
<script>
  export default {
    name: 'NavBar',
    props: {
      additionalLink: Object
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