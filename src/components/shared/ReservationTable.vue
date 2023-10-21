<template>
  <div class="reservation-table" :class="id">
    <table>
      <tr>
        <th :colspan="columnCount" class="title">{{ title }}</th>
      </tr>
      <tr>
        <th v-for="(col, index) in columns" :key="`th=${index}`">{{ col.label }}</th>
        <th class="controls"></th>
      </tr>
      <tr v-for="(row, rowIndex) in rowData" :key="`row-${rowIndex}`">
        <td v-for="(col, colIndex) in columns" :key="`td-${rowIndex}-${colIndex}`">{{ row[col.id] }}</td>
        <td class="controls">
          <button @click="openUpdateModal(rowIndex)">Update</button>
          <button class="delete" @click="deleteItem(rowIndex)">Delete</button>
        </td>
      </tr>
    </table>
    <teleport to='body'>
      <Modal :show="showUpdateModal" @close="showUpdateModal = false">
        <template #header>
          <h3>Update Reservation</h3>
        </template>
        <template #body>
          <div class="update-res">
            <div v-for="(col, index) in columns" :key="index" class="input-container">
              <input type="text" v-model="newItemValues[col.id]" :id="`${col.id}-input`">
              <label :for="`${col.id}-input`">{{ col.label }}</label>
            </div>
            <button @click="submitUpdate" class="submit active">Submit</button>
          </div>
        </template>
      </Modal>
    </teleport>
  </div>
</template>
  
<script>
  import Modal from '../shared/Modal.vue'
  export default {
    components: {
      Modal
    },
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
        newItemValues: null,
        showUpdateModal: false
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
      /* addItem() {
        this.$emit('addItem', this.newItemValues)
        this.newItemValues = this.valuesObject;
      }, */
      deleteItem(index) {
        this.$emit('deleteItem', this.rowData[index])
      },
      openUpdateModal(index) {
        const data = this.rowData[index]
        const keys = Object.keys(data)
        keys.forEach(key => {
          this.newItemValues[key] = data[key]
        }) 
        this.showUpdateModal = true
      },
      submitUpdate() {
        console.log('update submitted')
        console.log(this.newItemValues)
        this.$emit('updateItem', this.newItemValues)
        this.showUpdateModal = false
      }
    }
  }
</script>

<style lang="scss">
  .reservation-table {
    table {
      border-collapse: collapse;
      .title {
        font-size: 1rem;
        font-weight: 600;
      }
      th {
        font-weight: 600;
      }
      th, td {
        border: 1px solid black;
        font-size: 0.75rem;
        height: 2rem;
        padding: 8px;
        width: auto;
        &.controls {
          padding: 2px 8px;
          width: auto;
        }
        &.input {
          padding: 4px;
        }
      }
      button {
        background-color: green;
        border: none;
        border-radius: 4px;
        color: black;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0;
        height: 30px;
        width: 60px;
        &.plus {
          color: rgb(146, 146, 146);
          font-size: 1.5rem;
          &.active {
            color: black;
          }
        }
        &.delete {
          background-color: red;
          margin-left: 4px;
        }
        &:hover {
          background-color: #ECEBEB;
          border: 1px solid black;
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
      