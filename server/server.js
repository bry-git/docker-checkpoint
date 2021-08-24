
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8080;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://admin:password@db:5432/postgres'
})

app.get('/', (req, res) => {
    res.send(200, 'test2')
})

// gets all movies
app.get('/movies', (req, res) => {
    knex.select('*').from('movies')
        .then((data) => { res.send(200, data) })
        .catch((err) => { res.send(404, err) })
})

// add a director
app.post('/directors', async (req, res) => {
    try {
        await knex('directors').insert({
            director_id: req.body.director_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            nationality: req.body.nationality,
            date_of_birth: req.body.date_of_birth
        })
        res.send(200)
    }
    catch (err) {
        res.send(err, 400)
    }
})

// get all directors
app.get('/directors', (req, res) => {
    knex.select('*').from('directors')
        .then((data) => { res.send(200, data) })
        .catch((err) => { res.send(404, err) })
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});