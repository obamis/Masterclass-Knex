exports.up = knex =>knex.schema.alterTable('users',table=>
    table.timestamp('Deleted_at')    
);

exports.down = knex=>knex.schema.alterTable('users',table=>{
  table.dropColumn('Deleted_at')
  })
