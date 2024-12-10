<template>
    <div>
      <h1>Age List</h1>
      <button @click="goToAddAge" class="btn btn-primary mb-3">Add Age</button>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="age in ages" :key="age.id">
            <td>{{ age.id }}</td>
            <td>{{ age.age }}</td>
            <td>
              <button @click="goToEditAge(age.id)" class="btn btn-warning btn-sm">Edit</button>
              <button @click="deleteAge(age.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        ages: [],
      };
    },
    mounted() {
      this.loadAges();
    },
    methods: {
      loadAges() {
        axios.get('http://your-laravel-api-url/api/Age/get-data')
          .then(response => {
            this.ages = response.data.result;
          })
          .catch(error => {
            console.error('Error loading ages:', error);
          });
      },
      goToAddAge() {
        this.$router.push({ name: 'AddAge' });
      },
      goToEditAge(id) {
        this.$router.push({ name: 'EditAge', params: { id } });
      },
      deleteAge(id) {
        if (confirm('Are you sure you want to delete this age?')) {
          axios.delete('http://your-laravel-api-url/api/Age/delete', { data: { id } })
            .then(() => {
              this.loadAges();  // Refresh the list
            })
            .catch(error => {
              console.error('Error deleting age:', error);
            });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styling for the table */
  .table {
    width: 100%;
    margin-top: 20px;
  }
  </style>
  