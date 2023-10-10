<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </header>
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
    <NavBar />
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import NavBar from '@/components/shared/NavBar.vue';
  export default {
    name: 'Home',
    components: [
      NavBar,
      RouterLink
    ],
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

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
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
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    .logo {
      margin: 0 2rem 0 0;
    }
    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
