const knex = require('../database')

module.exports = {
  async index(req,res,next){
   const projects = await knex('projects')
   return res.status(200).send(projects)

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
      .del()
  
      return res.status(200).send('Post apagado')
  
    } catch (error) {
      next(error)
    }
      







  }
}
