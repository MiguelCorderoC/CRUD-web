<template>
    <div class="programas-editar">
        <span>Editar programa</span>
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
            <button type="submit" @click="actualizarPrograma()">Editar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'programas-editar',
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
    mounted() {
        this.obtenerPrograma(this.$route.params.id);
    },
    methods: {
        obtenerPrograma(id) {
            axios.get('http://localhost:3000/api/programas/' + id).then(res => {
                this.model.programa = res.data[0];
            });
        },
        actualizarPrograma() {
            axios.put('http://localhost:3000/api/programas/' + this.$route.params.id, this.model.programa).then(res => {
                if (res.data.affectedRows === 1) {

                }
            });
        }
    }
}
</script>

<style scoped></style>