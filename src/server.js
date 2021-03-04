const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(routes)

//Not Found
app.use((req,res,next)=>{
  const error = new Error('not found')
  error.status = 404
  next(error)
})

//catch all
app.use(( error,req,res,next )=>{
  res.status( error.status || 500 )
  res.json({ error: error.message })
})

app.listen(3333, ()=>console.log('Server is running! 👨‍🎤👨‍🎤'))
