// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://admin:password@db:5432/postgres'
  },

  migrations: {
    tableName: 'knex_migrations'
  }

};
