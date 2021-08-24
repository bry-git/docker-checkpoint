// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'admin',
        password: 'password',
        database: 'postgres'
    }
  },

  migrations: {
    tableName: 'knex_migrations'
  }

};
