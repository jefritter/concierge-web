<template>
    <div>
      <h1>Events Home</h1>
      <h3 class="greetings">{{ msg }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            msg: 'Work in Progress ...'
        }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h3 {
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>
