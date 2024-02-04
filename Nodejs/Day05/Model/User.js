const mongoose = require("mongoose")
const Joi = require("joi")


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

userSchema.methods.joiValidate = function(obj){
    console.log("check");
	var schema = {
		username: Joi.types.String().min(4).max(12).required(),
		password: Joi.types.String().min(4).max(12).required(),
        role:Joi.types.String().required(),

	}
	return Joi.validate(obj, schema);
}


module.exports = mongoose.model("User",userSchema)