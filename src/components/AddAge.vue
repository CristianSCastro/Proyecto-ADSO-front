<template>
    <div>
      <h1>Add Age</h1>
      <div class="form-group">
        <label for="age">Age</label>
        <input v-model="age" type="number" id="age" class="form-control" />
      </div>
      <button @click="saveAge" class="btn btn-success">Save Age</button>
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
    methods: {
      saveAge() {
        if (!this.age) {
          alert('Please enter an age');
          return;
        }
  
        axios.post('http://your-laravel-api-url/api/Age/save', { age: this.age })
          .then(() => {
            this.$router.push({ name: 'AgeList' });
          })
          .catch(error => {
            console.error('Error saving age:', error);
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
  