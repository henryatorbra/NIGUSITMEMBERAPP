import { Router } from "express";
import  express  from "express";
import googleusercreatepasswordvalidationschema from "../../models/validationschemas/googleusercreatepasswordvalidationschema.js";
import googleCreatePasswordController from "./googleusercreatepasswordController/googleusercreatepasswordController.js";
import requestfieldvalidator from "../../middlewareutilities/requestfieldsvalidator.js";
import bodyParser from "body-parser";


const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(express.static('public/Google Password Page'));


router.post('/', requestfieldvalidator(googleusercreatepasswordvalidationschema),googleCreatePasswordController);
// There will be no request field validator here because, I mean, it's google they'll always give you proper credentials.
//router.post('/googlelogin', googleLoginController);

// router.get('/test', (req, res)=> {
//   req.session.isAuth = true
//  console.log(  Object.getOwnPropertyNames(req.session));
//     //console.log(req.session);
//     res.json({message : 'testing sessions middleware'});
// })

export default router;