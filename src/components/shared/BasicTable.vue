<template>
  <div class="basic-table" :class="id">
    <table>
      <tr>
        <th :colspan="columnCount">{{ title }}</th>
      </tr>
      <tr>
        <th v-for="(col, index) in columns" :key="`th=${index}`">{{ col.label }}</th>
        <th class="controls"></th>
      </tr>
      <tr v-for="(row, index) in rowData" :key="`row-${index}`">
        <td v-for="(col, index) in columns" :key="index">{{ row[col.id] }}</td>
        <td class="controls"><button>X</button></td>
      </tr>
      <tr>
        <td v-for="(col, index) in columns" :key="index" class="input">
          <input type="text">
        </td>
        <td class="controls"><button class="plus">+</button></td>
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
    computed: {
      columnCount() {
        return this.columns?.length + 1
      }
    }
  }
</script>

<style lang="scss">
  .basic-table {
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th, td {
      height: 2rem;
      padding: 8px;
      width: 200px;
      &.controls {
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
      height: 100%;
      width: 100%;
      &.plus {
        color: black;
        font-size: 1.5rem;
      }
    }
    input {
      border: 1px solid gray;
      border-radius: 4px;
      height: 100%;
      width: 100%;
    }
  }
</style>
    