const knex = require('../database')

module.exports = {
  async index(req,res,next){
    
    const { user_id, page = 1 } = req.query
    const query = knex('projects')
    .limit(5)
    .offset((page-1)*5)

    if(user_id){
      query
      .where({ user_id })
      .join('users', 'users.id', '=', 'projects.user_id')
      .select('projects','users.username')
      .where('users.Deleted_at',null)

      .where({ user_id })
    }
  
  
    const results = await query
   return res.status(200).json(results)



  },
 
  async create(req,res,next){
    try {
      const { title, user_id } = req.body

      await knex('projects').insert({title, user_id })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
    
  },

  async update(req,res,next){
    try {
      const { title } = req.body
      const { id } = req.params
      
      await knex('projects')
      .update({ title })
      .where({ id })
      
      return res.send()
    } catch (error) {
        next(error)
    }

  },

  async delete(req,res,next){ 
    try {
      const { id } = req.params
      await knex('projects')
      .where({ id })
      .delete()
  
      return res.status(200).send('Post apagado')
  
    } catch (error) {
      next(error)
    }
      







  }
}
