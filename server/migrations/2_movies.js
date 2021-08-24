
exports.up = function (knex) {
    return knex.schema.createTable('movies', table => {
        table.increments('movie_id')
        table.string('movie_name')
        table.integer('movie_length_minutes')
        table.date('release_date')
        table.integer('director_id')
        table.foreign('director_id').references('directors.director_id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('movies')
};
