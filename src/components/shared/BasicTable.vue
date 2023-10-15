<template>
  <div class="basic-table" :class="id">
    <table>
      <tr>
        <th :colspan="columnCount" class="title">{{ title }}</th>
      </tr>
      <tr>
        <th v-for="(col, index) in columns" :key="`th=${index}`">{{ col.label }}</th>
        <th class="controls"></th>
      </tr>
      <tr v-for="(row, index) in rowData" :key="`row-${index}`">
        <td v-for="(col, index) in columns" :key="index">{{ row[col.id] }}</td>
        <td class="controls"><button @click="deleteItem(index)">X</button></td>
      </tr>
      <tr>
        <td v-for="(col, index) in columns" :key="index" class="input">
          <input type="text" v-model="newItemValues[col.id]">
        </td>
        <td class="controls"><button class="plus" :class="{ active: formComplete}" :disabled="!formComplete" @click="addItem">+</button></td>
      </tr>
    </table>
  </div>
</template>
  
<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      columns: {
        type: Array,
        required: true
      },
      rowData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        newItemValues: null
      }
    },
    beforeMount() {
      this.newItemValues = this.valuesObject;
    },
    computed: {
      columnCount() {
        return this.columns?.length + 1
      },
      formComplete() {
        return !!this.newItemValues && Object.keys(this.newItemValues).every(key => !!this.newItemValues[key])
      },
      valuesObject() {
        const obj = {}
        this.columns.forEach(col => obj[col.id] = null)
        return obj
      }
    },
    methods: {
      deleteItem(index) {
        this.$emit('deleteItem', this.rowData[index])
      },
      addItem() {
        this.$emit('addItem', this.newItemValues)
        this.newItemValues = this.valuesObject;
      }
    }
  }
</script>

<style lang="scss">
  .basic-table {
    table {
      border-collapse: collapse;
      .title {
        font-weight: 600;
      }
      th, td {
        border: 1px solid black;
        height: 2rem;
        padding: 8px;
        width: 200px;
        &.controls {
          padding: 0;
          width: 2rem;
        }
        &.input {
          padding: 4px;
        }
      }
      button {
        background-color: transparent;
        border: none;
        color: #A90808;
        font-size: 1rem;
        font-weight: 600;
        padding: 0;
        height: 40px;
        width: 40px;
        &.plus {
          color: rgb(146, 146, 146);
          font-size: 1.5rem;
          &.active {
            color: black;
          }
        }
        &:hover {
          background-color: #ECEBEB;
        }
        &:focus {
          background-color: white;
        }
      }
      input {
        border: 1px solid gray;
        border-radius: 4px;
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
    