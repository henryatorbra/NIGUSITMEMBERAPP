import { Router } from "express";
import deactivatesubscriptionstatusController from "./subscriptionstatusController/deactivatesubscriptionstatusController.js";
import express from "express";
                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";
import authChecker from "../../middlewareutilities/authChecker.js";
import getsubscriptionstatusController from "./subscriptionstatusController/getsubscriptionstatusController.js";
import activatesubscriptionstausController from "./subscriptionstatusController/activatesubscriptionstatusController.js";



const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(express.static('public/Subscription Status Page'));
// this gets the subscription status page.
// there should be a controller that returns the subscription status page.
// TODO: implement route that serves subscription status page : router.get("/", )
router.get('/', authChecker,getsubscriptionstatusController )
router.post('/renew',authChecker, activatesubscriptionstausController);
router.post('/deactivate',authChecker, deactivatesubscriptionstatusController);



export default router;