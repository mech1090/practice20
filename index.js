const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('TEST OKK')
})

app.get('*',(req,res)=>{
    res.send('BAD_REQUEST')
})

app.listen(config.get('port'),()=>{
    console.log(`Server is running on port ${config.get('port')}`)
})