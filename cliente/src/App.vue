<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="app">
    <header>
      <Menu />
    </header>
    <RouterView />
  </div>
</template>

<style>
.app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}
</style>
