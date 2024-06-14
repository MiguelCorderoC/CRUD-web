<script setup>
import Programa from '@/components/Programa.vue';
</script>

<template>
  <main>
    <div v-if="programas.length > 0">
      <div v-for="(programa, index) in programas" :key="index">
        <Programa :titulo="programa.nombre" :descripcion="programa.descripcion" :categoria="programa.categoria"
          :ano="programa.ano" :portada="programa.portada" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: "HomeView",
  data() {
    return {
      programas: []
    }
  },
  mounted() {
    this.getProgramas();
  },
  methods: {
    getProgramas() {
      axios.get('http://localhost:3000/api/programas').then(res => {
        this.programas = res.data;
        console.log(res.data);
      }).catch(err => {
        console.error(err);
      });
    }
  }
}
</script>

<style scoped></style>