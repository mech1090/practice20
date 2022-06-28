const mongoose = require('mongoose')
const config = require('config')

const uri = config.get('port') + '/' + config.get('database.name')
const options = {useNewUrlParser:true,useUnifiedTopology:true}

module.exports = mongoose.connect(uri,options).catch(error=>console.log(error))