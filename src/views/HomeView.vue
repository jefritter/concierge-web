<template>
  <div>
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
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        header: 'Users',
        users: []
      }
    },
    beforeMount() {
      fetch('/api/users/all')
        .then(response => response.json())
        .then(data => this.users = data.data)
    },
    computed: {
      hasUserData() {
        return this.users.length > 0
      }
    }
  }
</script>

<style lang="">
  
</style>
