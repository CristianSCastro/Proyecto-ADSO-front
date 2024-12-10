<template>
    <div>
      <h1>Edit Age</h1>
      <div class="form-group">
        <label for="age">Age</label>
        <input v-model="age" type="number" id="age" class="form-control" />
      </div>
      <button @click="updateAge" class="btn btn-warning">Update Age</button>
      <button @click="goBack" class="btn btn-secondary">Back</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        age: '',
      };
    },
    mounted() {
      this.loadAge();
    },
    methods: {
      loadAge() {
        const id = this.$route.params.id;
        axios.get(`http://your-laravel-api-url/api/Age/get-data/${id}`)
          .then(response => {
            this.age = response.data.result.age;
          })
          .catch(error => {
            console.error('Error loading age:', error);
          });
      },
      updateAge() {
        const id = this.$route.params.id;
        axios.put('http://your-laravel-api-url/api/Age/update', { id, age: this.age })
          .then(() => {
            this.$router.push({ name: 'AgeList' });
          })
          .catch(error => {
            console.error('Error updating age:', error);
          });
      },
      goBack() {
        this.$router.push({ name: 'AgeList' });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  