import Joi from "joi";
const signupvalidationschema = Joi.object().keys({
    firstname : Joi.string().required(),
    lastname : Joi.string().required(),
    email : Joi.string().email().required(),
    phone: Joi.string().required(),
    password : Joi.string().min(8).required(),

});
 

export default signupvalidationschema;