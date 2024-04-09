import { Router } from "express";
import subscriptionstatusController from "./subscriptionstatusController/subscriptionstatusController.js";
import express from "express";
                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(express.static('public/Subscription Status Page'));
// this gets the subscription status page.
// there should be a controller that returns the subscription status page.
// TODO: implement route that serves subscription status page : router.get("/", )
router.post('/',subscriptionstatusController);

export default router;