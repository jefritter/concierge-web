<template>
  <div class="main-header" :class="fontColor">
    <img class=logo src="../../assets/butler.png">
    <h1>My Concierge</h1>
    <h1 v-if="subtitle">&nbsp;- {{ subtitle }}</h1>
  </div>
</template>
  
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    fontColor: {
      type: String,
      default: 'white'
    },
    backgroundColor: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.main-header {
  background-color: #84A7AE;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 180px;
  padding: 20px;
  width: 100%;
  &.black {
    h1 {
      color: black;
    }
  }
  .logo {
    background-color: white;
    display: block;
    margin: 20px 40px;
    height: 100px;
    width: 100px;    
    border-radius: 6px;
  }
  h1 {
    color: white;
    font-family: 'Marcellus', Times, serif;
    font-size: 3rem;
  }
}
</style>
  