
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('directors').del()
    .then(function () {
      // Inserts seed entries
      return knex('directors').insert([
        {first_name: 'christopher', last_name: 'nolan', nationality: 'usa', date_of_birth: '07/30/1970'},
        {first_name: 'quentin', last_name: 'tarantino', nationality: 'usa', date_of_birth: '03/27/1963'},
        {first_name: 'martin', last_name: 'scorsese', nationality: 'usa', date_of_birth: '11/17/1942'},
      ]);
    });
};
