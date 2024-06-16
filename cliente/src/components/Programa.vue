<template>
    <div class="programa">
        <img :src="portada" alt="Portada de {{ titulo }}">
        <ul>
            <span class="id">{{ id }}</span>
            <br>
            <span class="titulo">{{ titulo }}</span>
            <p></p>
            <span class="descripcion">{{ descripcion }}</span>
            <p></p>
            <span class="categoria">{{ categoria }}</span>
            <p></p>
            <span class="ano">{{ ano }}</span>
            <div class="acciones">
                <RouterLink :to="{ path: 'programas/' + this.id + '/editar' }">
                    <button class="btn-editar">Editar</button>
                </RouterLink>
                <button class="btn-eliminar" @click="eliminarPrograma(this.id)">Eliminar</button>
            </div>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        id: {
            type: String,
            required: true
        }
        ,
        titulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        ano: {
            type: String,
            required: true
        },
        portada: {
            type: String,
            required: true,
            default: 'https://via.placeholder.com/150'
        }
    }
    ,
    methods: {
        eliminarPrograma(id) {
            axios.delete('http://localhost:3000/api/programas/' + id);
            alert('Programa eliminado con exito');
        }
    }
}
</script>

<style scoped>
.programa {
    display: flex;
    margin: 0 auto 15px;
    width: 50%;
}

ul {
    width: 100%;
}

.programa img {
    border-radius: 10px;
    width: 150px;
}

.titulo {
    font-size: 1.6em;
}

span {
    font-size: 1.1em;
}

.id {
    display: none;
}

.acciones {
    display: flex;
    justify-content: right;
    margin-top: 10px;
}

button {
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1.1em;
    height: 40px;
    width: 100px;
}

.btn-editar {
    background-color: #008DDA;
}

.btn-eliminar {
    background-color: #E72929;
    margin-left: 10px;
}
</style>