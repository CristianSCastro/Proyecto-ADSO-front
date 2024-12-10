<template>
  <div class="container">
    <h1>Edit Age</h1>
    <form @submit.prevent="updateAge" class="form-container">
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" v-model="age" id="age" class="form-input" required />
      </div>
      <button type="submit" class="submit-btn">Update Age</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditAge",
  data() {
    return {
      age: null,
    };
  },
  methods: {
    updateAge() {
      console.log("Updating age:", this.age);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.form-input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #45a049;
}

.submit-btn:active {
  background-color: #388e3c;
}
</style>
