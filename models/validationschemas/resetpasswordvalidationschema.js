import Joi from "joi";
const resetpasswordvalidationSchema = Joi.object().keys({
    
    newpassword : Joi.string().min(8).required(),
    oldpassword : Joi.string().min(8).required(),

});
 

export default resetpasswordvalidationSchema;