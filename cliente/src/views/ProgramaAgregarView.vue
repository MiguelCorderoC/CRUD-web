<template>
    <div class="programa-agregar">
        <span>Agregar programa</span>
        <p></p>
        <form action="">
            <label for="">Nombre</label>
            <br>
            <input type="text" name="" id="" v-model="model.programa.nombre">
            <br>
            <label for="">Descripcion</label>
            <br>
            <input type="text" name="" id="" v-model="model.programa.descripcion">
            <br>
            <label for="">Categoria</label>
            <br>
            <input type="text" name="" id="" v-model="model.programa.categoria">
            <br>
            <label for="">Año</label>
            <br>
            <input type="text" name="" id="" v-model="model.programa.ano">
            <br>
            <label for="">Portada</label>
            <br>
            <input type="text" name="" id="" v-model="model.programa.portada">
            <p></p>
            <button type="submit" @click="agregarPrograma()">Agregar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ProgramaAgregarView',
    data() {
        return {
            model: {
                programa: {
                    nombre: '',
                    descripcion: '',
                    categoria: '',
                    ano: '',
                    portada: ''
                }
            }
        }
    },
    methods: {
        agregarPrograma() {
            axios.post('http://localhost:3000/api/programas', this.model.programa).then(res => {
                if (res.data.affectedRows == 1) {
                    alert('Programa agregado con exito');
                    this.model.programa = {
                        nombre: '',
                        descripcion: '',
                        categoria: '',
                        ano: '',
                        portada: ''
                    }
                }
            });
        }
    }
}
</script>

<style scoped></style>