<template>
  <div class="header">
    <img class=logo src="../../assets/butler.png">
    <h1>
      {{title}}
    </h1>

    <h1>
      {{subtitle}}
    </h1>
    
    <h1>
      {{subtitle }}
    </h1>
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
      type: String,
      required: true
    },
    fontColor: {
      type: String
    },
    backgroundColor: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: #84A7AE;
  border-bottom: 1px solid black;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 180px;
  padding: 20px;
  width: 100%;
  .logo {
    background-color: white;
    display: block;
    margin: 20px;
    height: 100px;
    width: 100px;    
    border-radius: 6px;
    
    h1{
      color: white;
    }
  }
  h1 {
    color: black;
    font-family: 'Marcellus', Times, serif;
    font-size: 2rem;
    flex-grow: 2;
  }
  
}
</style>
  