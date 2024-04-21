

import { Router } from "express";
import express from "express"; 
import authChecker from "../../middlewareutilities/authChecker.js";
import resetpasswordController from "./resetpasswordController/resetpasswordController.js";
import resetpassswordsvalidator from "../../middlewareutilities/requestfieldsvalidator.js"
import resetpasswordvalidationSchema from "../../models/validationschemas/resetpasswordvalidationschema.js";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(authChecker,express.static('public/Password Reset Page'));


router.post('/',  authChecker,resetpassswordsvalidator(resetpasswordvalidationSchema) ,resetpasswordController);

export default router;