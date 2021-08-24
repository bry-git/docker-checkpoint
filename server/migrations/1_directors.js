
exports.up = function(knex) {
  return knex.schema.createTable('directors', table => {
    table.increments('director_id')
    table.string('first_name')
    table.string('last_name')
    table.string('nationality')
    table.date('date_of_birth')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('directors')
};

