<template>
  <div class="main-homepage">
    <CustomHeader title="My Concierge" subtitle=""/>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/dining">Dining</RouterLink>
      <RouterLink to="/events">Events</RouterLink>
      <RouterLink to="/spa">Spa</RouterLink>
    </nav>
    <main>
      <div class="my-res">
        <h2>My Reservations</h2>
      </div>
      <div class="todays-events">
        <h2>Today's Events</h2> 
      </div>
      <!-- <div class="users">
        <h1>{{ header }}</h1>
        <table v-if="hasUserData">
          <tr>
            <th>Id</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
          </tr>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </table>
      </div> -->
    </main>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import CustomHeader from './shared/CustomHeader.vue'
  export default {
    name: 'Home',
    components: {
      CustomHeader,
      RouterLink
    },
    data() {
      return {
        header: 'Users',
        users: []
      }
    },
    beforeMount() {
      try {
        fetch('/api/users/all')
        .then(response => response.json())
        .then(data => this.users = data.data)
      } catch {
        console.log('error fetching data')
      }
      
    },
    computed: {
      hasUserData() {
        return this.users.length > 0
      }
    }
  }
</script>
  
<style lang="scss">

.main-homepage {
  background-size: cover;
  background-image: url("/src/assets/resort-entrance.jpg");
  min-height: 100vh;  
  nav {
    margin: 0;
    padding: 12px;
    border-bottom: 1px solid black;
    background-color: white;
    text-align: center;
  }
  main {
    display: flex;
    justify-content: space-between;
    padding: 100px;
    .my-res,
    .todays-events {
      background-color: white;
      height: 800px;
      border-radius: 12px;
      flex-grow: 1;
      opacity: 0.8;
      h2 {
        color: black;
        text-align: center;
      }
    }
    .todays-events {
      margin-left: 20px;
    }
  }
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  
  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    &:first-of-type {
      border: 0;
    }
    .router-link-exact-active {
      color: var(--color-text);
      &:hover {
        background-color: transparent;
      }
    }
  }
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
}
</style>
