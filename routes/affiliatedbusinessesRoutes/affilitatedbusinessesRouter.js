import {Router} from "express";
import  express  from "express";
import authChecker from "../../middlewareutilities/authChecker.js";

// import { Express } from "express";
import affiliatedbusinessesController from "./affiliatedbusinessesController/affiliatedbusinessesController.js";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use( authChecker, express.static('public/Affiliated Business Page'));
// this gets the subscription status page.
// there should be a controller that returns the subscription status page.
// TODO: implement route that serves subscription status page : router.get("/", )
router.post('/',authChecker,affiliatedbusinessesController);

export default router;