<template>
    <div class="reservation">
      <div class="header">Make a Reservation</div>
      <hr>
      <div class="fields-container">
        <div class="field" v-for="(field, index) in fields" :key="`field-${index}`">
          <select v-if="field.type=='multi-select'" :id="`input-${index}`" v-model="values[field.id]">
            <option v-for="opt in field.options" :key="opt.id" :value="opt.id">
              {{ opt.title }}
            </option>
          </select>
          <input v-else-if="field.type=='time'" :type="field.type" :id="`input-${index}`" v-model="values[field.id]" min="09:00" max="18:00" step="1800000">
          <input v-else :type="field.type" :id="`input-${index}`" v-model="values[field.id]">
          <label :for="`input-${index}`">{{ field.label }}</label>
        </div>
      </div>
      <button @click="submit" :disabled="!formCompleted" :class="{ active: formCompleted }">Submit</button>
    </div>
  </template>
    
  <script>
  export default {
    data() {
      return {
        values: {}
      }
    },
    props: {
      fields: {
        type: Array,
        required: true
      }
    },
    emits: ['submitReservation'],
    beforeMount() {
      this.fields.forEach(field => {
        this.values[field.id] = ''
      })
    },
    computed: {
      formCompleted() {
        return Object.values(this.values).every(v => !!v)
      }
    },
    methods: {
      submit() {
        this.$emit('submitReservation', this.values)
      }
    }
  }
  </script>
  
  <style lang="scss">
  .reservation {
    background-color: white;
    border: 1px solid black;
    color: black;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    height: auto;
    margin-bottom: 40px;
    padding: 20px 40px 40px 40px;
    max-width: 560px;
    .header {
      font-size: 24px;
      text-align: center;
      padding-bottom: 20px;
    }
    hr {
      border-top: 1px solid black;
      margin: 0 -40px;
      max-width: 580px;
    }
    .fields-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: -20px;
      padding: 40px 0;
      .field {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        select,
        input {
          border: 1px solid black;
          border-radius: 4px;
          padding: 8px;
          text-align: center;
          height: 40px;
          width: 220px;
        }
        label {
          font-size: 16px;
          text-align: center;
        }
      }
    }
    button {
      all: unset;
      background-color: #84A7AE;
      border-radius: 6px;
      color: white;
      font-family: 'Manrope', Arial, sans-serif;
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      margin: auto;
      height: 45px;
      width: 166px;
      &:disabled {
        background-color: rgb(189, 188, 188);
      }
      &.active {
        &:hover {
          border: 1px solid black;
          color: black; 
        }
      }
    }
    @media (max-width: 1208px) {
      min-width: 300px;
    }
  }
  </style>
    