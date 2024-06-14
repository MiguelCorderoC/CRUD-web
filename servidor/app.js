const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_data',
    port: '3306'
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion a la base de datos exitosa');
    }
});

const puerto = 3000;
app.listen(puerto, function () {
    console.log('Servidor activo desde http://localhost:' + puerto);
});

app.get('/', function (req, res) {
    res.send('Bienvenido a Node js')
});

app.get('/api/programas', (req, res) => {
    conexion.query('SELECT * FROM programas', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});

app.get('/api/programas/:id', (req, res) => {
    conexion.query('SELECT * FROM programas WHERE id = ?', [req.params.id], (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});

app.post('/api/programas', (req, res) => {
    const data = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        ano: req.body.ano,
        portada: req.body.portada
    }
    const sql = 'INSERT INTO programas SET ?';
    conexion.query(sql, data, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            res.send(resultado);
        }
    });
});

app.delete('/api/programas/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM programas WHERE id = ?', [id], (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});

app.put('/api/programas/:id', (req, res) => {
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const categoria = req.body.categoria
    const ano = req.body.ano
    const portada = req.body.portada
    const sql = 'UPDATE programas set nombre = ?, descripcion = ?, categoria = ?, ano = ?, portada = ? WHERE id = ?';
    conexion.query(sql, [nombre, descripcion, categoria, ano, portada], (error, resultado) => {
        if (error) {
            throw error;
        } else {
            res.send(resultado);
        }
    });
});