// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:'KnexTeste',
      user:'postgres',
      password:'root'
    },
    migrations:{
      tableName:'KnexMigrations',
      directory:`${__dirname}/src/database/migrations`
    },
    seeds:{
      directory:`${__dirname}/src/database/seeds`
    }
  },

};
