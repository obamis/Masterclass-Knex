// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:'KnexTeste',
      user:'postgres',
      password:'root'
    },
    onUpdateTrigger:table =>`CREATE TRIGGER ${table}_updated_at
    BEFOR UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp() `
    ,
     migrations:{
      tableName:'KnexMigrations',
      directory:`${__dirname}/src/database/migrations`
    },
    seeds:{
      directory:`${__dirname}/src/database/seeds`
    }
  },

};
