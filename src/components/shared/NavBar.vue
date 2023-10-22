<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/dining">Dining</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/spa">Spa</router-link>
    </nav>
  </div>
</template>
  
<script>
  export default {
    name: 'NavBar'
  }
</script>
  
<style>
  nav {
    display: flex;
    padding: 10px;
    justify-content: center;
    background-color:white;
    width: 100vw;
  }
</style>