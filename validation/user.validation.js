const Joi = require('joi')

const userSchema = (fields)=>{
    const userValidation = Joi.object({
        email:Joi.string().min(8).max(24).required(),
        password:Joi.string().min(6).max(32).required() 
       })
       const {error,value} = userValidation.validate(fields)
       return {error,value}
}

module.exports = {userSchema}