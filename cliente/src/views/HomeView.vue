<script setup>
import Programa from '@/components/Programa.vue';
import { ref, watch, computed } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

const searchQuery = ref('');
const programas = ref([]);

const getProgramas = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/programas');
    programas.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const filteredProgramas = computed(() => {
  if (!searchQuery.value) {
    return programas.value;
  }
  return programas.value.filter(programa =>
    programa.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

getProgramas();

watch(searchQuery, (newQuery, oldQuery) => {
  console.log(`Buscando por: ${newQuery}`);
});

</script>

<template>
  <main>
    <section class="sect-opciones">
      <input type="search" v-model="searchQuery" placeholder="Buscar por título">
      <RouterLink to="/programas/agregar">
        <button>Agregar</button>
      </RouterLink>
    </section>
    <div v-if="filteredProgramas.length > 0">
      <div v-for="(programa, index) in filteredProgramas" :key="index">
        <Programa :titulo="programa.nombre" :descripcion="programa.descripcion" :categoria="programa.categoria"
          :ano="programa.ano" :portada="programa.portada" :id="programa.id" />
      </div>
    </div>
    <div v-else class="div-sinTitulo">
      <p>No se encontraron programas</p>
    </div>
  </main>
</template>

<style scoped>
.sect-opciones {
  display: flex;
  justify-content: right;
  margin-top: 1em;
}

.sect-opciones input {
  border: 1px solid silver;
  border-radius: 5px;
  text-align: center;
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

.div-sinTitulo {
  background-color: #686D76;
  border: 5px solid silver;
  border-radius: 10px;
  color: white;
  font-size: 2em;
  text-align: center;
  margin: 2em auto;
  padding: 1em 0 1em 0;
  width: 50%;
}
</style>