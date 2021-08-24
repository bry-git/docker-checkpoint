const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8080;

app.use(cors())

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'admin',
        password: 'password',
        database: 'postgres'
    }
})

app.get('/', (req, res) => {
    res.send(200, 'this is the root')
})

//gets all movies
app.get('/movies', (req, res) => {
    knex.select('*').from('movies')
        .then((data) => {res.send(200, data)})
        .catch((err) => {res.send(404, err)})
})

app.get('/directors', (req, res) => {
    knex.select('*').from('directors')
        .then((data) => {res.send(200, data)})
        .catch((err) => {res.send(404, err)})
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});