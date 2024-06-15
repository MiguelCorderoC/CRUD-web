<script setup>
import Programa from '@/components/Programa.vue';
</script>

<template>
  <main>
    <section class="sect-opciones">
      <input type="search">
<<<<<<< HEAD
      <RouterLink to="/programas/agregar">
        <button>Agregar</button>
      </RouterLink>
=======
      <button>Agregar</button>
>>>>>>> 46daf70e47f6ecb8f454c9fed1dd5185f185e8fa
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
}

.sect-opciones button {
  background-color: #A5DD9B;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  width: 100px;
}
</style>