<template>
  <div class="navbar">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="sep">|</li>
        <li><router-link to="/dining">Dining</router-link></li>
        <li class="sep">|</li>
        <li><router-link to="/events">Events</router-link></li>
        <li class="sep">|</li>
        <li><router-link to="/spa">Spa</router-link></li>
      </ul>
    </nav>
  </div>
</template>
  
<script>
  export default {
    name: 'NavBar'
  }
</script>
  
<style scoped>
  .navbar {
    background-color: white;
    text-align: center;
  }

  .navbar  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .navbar li {
    display: inline;
  }

  .navbar .sep {
    margin: 0 10px;
    color: black;
  }

  .navbar a {
    text-decoration: none;
    color: black;
  }

  nav {
    padding: 10px;
    text-align: center;
  }
</style>