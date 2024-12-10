<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl font-semibold">Age Management</h1>
    </header>

    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 text-white p-4 mt-8">
      <p class="text-center">© 2024 Age Management App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global Styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7fafc;
}
</style>

