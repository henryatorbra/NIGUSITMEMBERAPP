import Joi from "joi";
const createbusinessesvalidationschema = Joi.object().keys({
    businessname : Joi.string().required(),
    description : Joi.string().required(),
    contact : Joi.string().required(),
    address: Joi.string().required(),
   

});
 

export default createbusinessesvalidationschema;