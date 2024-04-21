import Joi from "joi";
const loginfieldsvalidationschema = Joi.object().keys({
    

    password : Joi.string().min(8).required(),

});
 

export default loginfieldsvalidationschema;