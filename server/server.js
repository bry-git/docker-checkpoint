
const morgan = require('morgan')
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8080;

app.use(cors())
app.use(morgan("dev"))
console.log('init')

const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://admin:password@db:5432/postgres'
})

app.get('/', (req, res) => {
    res.send(200, 'this is the root')
})

// gets all movies
app.get('/movies', (req, res) => {
    knex.select('*').from('movies')
        .then((data) => {res.send(200, data)})
        .catch((err) => {res.send(404, err)})
})

// directors
app.get('/directors', (req, res) => {
    knex.select('*').from('directors')
        .then((data) => {res.send(200, data)})
        .catch((err) => {res.send(404, err)})
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});