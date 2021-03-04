exports.up = function(knex) {
  return knex.schema.createTable('projects',function(table) {
    table.increments('id')
    table.string('title').notNullable()

    //relacionamentos
    //1-n
    table.integer('user_id')
    .references('users.id')
    .notNullable()
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    



    table.timestamps(true,true)
    
  }
  )};

exports.down = function(knex) {
  return knex.schema.dropTable('projects')
};