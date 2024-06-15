<script setup>
import Programa from '@/components/Programa.vue';
</script>

<template>
  <main>
    <section class="sect-opciones">
      <input type="search">
      <RouterLink to="/programas/agregar">
        <button>Agregar</button>
      </RouterLink>
    </section>
    <div v-if="programas.length > 0">
      <div v-for="(programa, index) in programas" :key="index">
        <Programa :titulo="programa.nombre" :descripcion="programa.descripcion" :categoria="programa.categoria"
          :ano="programa.ano" :portada="programa.portada" :id="programa.id" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

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
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.sect-opciones {
  display: flex;
  justify-content: right;
  margin-top: 1em;
}

.sect-opciones input {
  border: 1px solid silver;
  border-radius: 5px;
}

.sect-opciones button {
  background-color: #247e19;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
  height: 40px;
  margin-left: 1em;
  margin-right: 1em;
  width: 100px;
}
</style>