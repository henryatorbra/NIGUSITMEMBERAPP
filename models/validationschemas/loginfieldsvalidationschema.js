import Joi from "joi";
const loginfieldsvalidationschema = Joi.object().keys({
    
    email : Joi.string().email().required(),
    password : Joi.string().min(8).required(),

});
 

export default loginfieldsvalidationschema;