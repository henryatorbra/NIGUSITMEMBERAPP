import Joi from "joi";

function requestfieldvalidator (schema){
    return (req, res, next) => {
       // console.log(req.body)
        const {error} = schema.validate(req.body);
        const valid = error == null;

        if (valid){
           // console.log('user sign up values are valid, calling the next middleware.')
            next();
        }else {
                //console.log('user signup values are INVALID')
            const { details } = error;
            const message = details.map(i => i.message).join(',');

            res.status(422).json({error: message});

        }

    }
}

export default requestfieldvalidator;