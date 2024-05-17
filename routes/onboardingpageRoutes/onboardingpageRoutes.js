import { Router } from "express";
import  express  from "express";
import loginController from "./onboardingpageController/onboardingpageController.js";
import loginfieldsvalidationschema from "../../models/validationschemas/loginfieldsvalidationschema.js";
import requestfieldvalidator from "../../middlewareutilities/requestfieldsvalidator.js";
import googleLoginController from "./googleloginController/googleloginController.js";
import bodyParser from "body-parser";


const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(express.static('public/Onboarding Page 2'));

//ROUTES;
// It might be confusing at first that there is not a login route (That handles serving the login static page). This 
// is because, I wanted the login route and the onboarding route (static pages routes) to be together.
// Because the onboarding route comes first in the app.And there is a link in the onboarding page (via the "Login button") to the login button,
// It would have been a hassle to create an extra route that would serve up the login static files when the "Login" button is pressed in the onboarding page.
// The login page is instead packaged with the onboarding page static files and sent as a response when the onboarding page is requested.
// I decided that there shouldn't be any login route (that expressly handles serving the loginpage static files).
// But the route that login credentials are sent to are handled by the onboarding page route but with a loginController.
// you can see it after the request validator middleware "loginController".
router.post('/', requestfieldvalidator(loginfieldsvalidationschema),loginController);
// There will be no request field validator here because, I mean, it's google they'll always give you proper credentials.
router.post('/googlelogin', (req, res, next)=>{
   
    next()
},googleLoginController);

// router.get('/test', (req, res)=> {
//   req.session.isAuth = true
//  console.log(  Object.getOwnPropertyNames(req.session));
//     //console.log(req.session);
//     res.json({message : 'testing sessions middleware'});
// })

export default router;