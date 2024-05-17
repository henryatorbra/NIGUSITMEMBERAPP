
import {Router} from "express";
import  express  from "express";
import authChecker from "../../middlewareutilities/authChecker.js";
import createaffiliatedbusinessController from "./createaffiliatedbusinessController/createaffiliatedbusinessController.js";
import getcreateaffiliatedbusinessesapage from "./createaffiliatedbusinessController/servecreateaffiliatedbusinessespage.js";
import requestfieldvalidator from "../../middlewareutilities/requestfieldsvalidator.js";
import createbusinessesvalidationschema from "../../models/validationschemas/createaffilliatedbusinessesvalidationmodels.js";

// import { Express } from "express";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(authChecker, express.static('public/Createaffiliatedbusiness'));
// this gets the subscription status page.
// there should be a controller that returns the subscription status page.
// TODO: implement route that serves subscription status page : router.get("/", )


// there is no form at the moment to create an affiliated business 
// we will be using thunder client.

// hence, we will not design a route to serve any ejs files.
// we will just go ahead to implement the creation of a business
// and a query to return all businesses available.
router.get('/', authChecker,  getcreateaffiliatedbusinessesapage);
router.post('/',authChecker,(req,res,next)=>{
    console.log("it was hit")
    next();
}, requestfieldvalidator(createbusinessesvalidationschema),createaffiliatedbusinessController);

export default router;