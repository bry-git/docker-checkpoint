
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {movie_name: 'interstellar', movie_length_minutes: 169, release_date: '11/09/2014', director_id: 1},
        {movie_name: 'pulp fiction', movie_length_minutes: 154, release_date: '10/14/1994', director_id: 2},
        {movie_name: 'the departed', movie_length_minutes: 151, release_date: '10/06/2006', director_id: 3},
      ]);
    });
};
