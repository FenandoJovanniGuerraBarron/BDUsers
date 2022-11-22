const express = require("express")
const taskRoutes = require('./tasks/tasks.router')

const port=9000
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:'OK'
    })
})

app.use('/',taskRoutes)

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})