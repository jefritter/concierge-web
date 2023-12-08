<template>
  <div class="main-header" :class="fontColor">
    <div class="left-section">
      <img class=logo src="../../assets/butler.png">
      <h1>My Concierge</h1>
      <h1 v-if="subtitle">&nbsp;- {{ subtitle }}</h1>
    </div>
    <div class="right-section">
      <button><router-link to="/login">Sign in</router-link></button>
      <button><router-link to="/register">Sign up</router-link></button>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
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

  .left-section, .right-section {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .right-section {
    flex-grow: 1;
    justify-content: flex-end;
  }

  button {
    background-color: white;
    border: 1px solid black;
    border-radius: 6px;
    // color: rgb(0, 0, 0);
    // padding: 15px 30px;
    height: 50px;
    width: 110px;
    text-align: center;
    font-size: 16px;
    margin-left: 20px;
    &:hover {
      background-color: #dfe4dc;
      border: 2px solid black;
    }
    a {
      color: black;
      display: block;
      height: 50px;
      padding: 15px;
      width: 100%;
    }
  }
}
</style>
  