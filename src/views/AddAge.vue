<template>
    <div>
      <h1>Add New Age</h1>
      <form @submit.prevent="saveAge">
        <label for="age">Age:</label>
        <input type="number" v-model="age" id="age" required />
        <button type="submit">Save Age</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddAge",
    data() {
      return {
        age: null,
      };
    },
    methods: {
      saveAge() {
        // Send API request to save the new age (replace with your actual API call)
        console.log("Saving age:", this.age);
        // Use axios to send the data to your backend if needed
        // axios.post('/api/Age/save', { age: this.age }).then(response => {...});
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add some styling for the page */
  h1 {
    color: blue;
  }
  form {
    margin-top: 20px;
  }
  </style>
  