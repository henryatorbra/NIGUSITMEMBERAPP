import { Router } from "express";
import express from "express";
import purchasesController from "./purchasesController/purchasesController.js";
import authChecker from "../../middlewareutilities/authChecker.js";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(authChecker, express.static("public/Purchases Page"));


router.post('/',purchasesController);

export default router;