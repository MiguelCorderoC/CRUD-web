<template>
    <div class="programa-agregar">
        <div v-if="mensaje === 1" class="mensaje-exito">
            <h1>Programa guardado con éxito!!!</h1>
        </div>
        <div v-if="mensaje === 2" class="mensaje-error">
            <h1>Error al ingresar los datos, verifique de nuevo</h1>
        </div>
        <form class="form" @submit.prevent="agregarPrograma">
            <h2 class="form-title">Agregar programa</h2>
            <p></p>
            <div class="form-container">
                <div class="form-group" v-for="(value, key) in model.programa" :key="key">
                    <input type="text" :id="key" class="form-input" v-model="model.programa[key]" placeholder="">
                    <label :for="key" class="form-label">{{ key.charAt(0).toUpperCase() + key.slice(1) }}:</label>
                    <span class="form-line"></span>
                </div>
            </div>
            <p></p>
            <input type="submit" class="form-submit" value="Agregar programa">
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProgramaAgregarView',
    data() {
        return {
            mensaje: 0,
            model: {
                programa: {
                    nombre: '',
                    descripcion: '',
                    categoria: '',
                    ano: '',
                    portada: ''
                }
            }
        };
    },
    methods: {
        agregarPrograma() {
            axios.post('http://localhost:3000/api/programas', this.model.programa)
                .then(res => {
                    if (res.data.affectedRows === 1) {
                        this.model.programa = {
                            nombre: '',
                            descripcion: '',
                            categoria: '',
                            ano: '',
                            portada: ''
                        };
                        this.mensaje = 1;
                        setTimeout(() => {
                            this.mensaje = 0;
                        }, 10000); // Oculta el mensaje después de 10 segundos
                    }
                })
                .catch(error => {
                    console.error("Error al agregar el programa:", error);
                    this.mensaje = 2;
                    setTimeout(() => {
                        this.mensaje = 0;
                    }, 10000); // Oculta el mensaje después de 10 segundos
                });
        }
    }
};
</script>

<style scoped>
.programa-agregar {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mensaje-exito {
    background-color: #9cf185;
    border: 3px solid #247e19;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 1em;
}

.mensaje-error {
    background-color: #f18b85;
    border: 3px solid #e61919;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 1em;
}

.form {
    background-color: #EEEEEE;
    border: 1px solid silver;
    border-radius: 10px;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);
    margin-top: 1em;
    max-width: 300px;
    text-align: center;
    padding: 1em 2em;
    width: 90%;
}

.form-title {
    font-size: 2rem;
    margin-bottom: .5em;
}

.form-container {
    margin-top: 3em;
    display: grid;
    gap: 2em;
}

.form-group {
    position: relative;
    --color: #5757577e;
}

.form-input {
    width: 100%;
    background: none;
    color: #706c6c;
    font-size: 1rem;
    padding: .2em .3em;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color);
}

.form-input:focus+.form-label,
.form-input:not(:placeholder-shown)+.form-label {
    transform: translateY(-20px) scale(0.7);
    transform-origin: left top;
    color: #3866f2;
}

.form-label {
    color: var(--color);
    position: absolute;
    top: 10px;
    left: 5px;
    transform: translateY(-10px);
    transition: transform .3s, color .3s;
    pointer-events: none;
}

.form-submit {
    background-color: #247e19;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    padding: .8em .5em;
    margin-top: 10px;
    border: none;
    border-radius: .5em;
}

.form-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #3866f2;
    transform: scale(0);
    transform-origin: left bottom;
    transition: transform .3s;
}

.form-input:focus~.form-line,
.form-input:not(:placeholder-shown)~.form-line {
    transform: scale(1);
}
</style>