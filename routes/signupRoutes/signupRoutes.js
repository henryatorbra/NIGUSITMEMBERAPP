import { Router } from "express";
import signupController from "./signupController/signupController.js";
import signupfieldsvalidator from "../../middlewareutilities/requestfieldsvalidator.js"
import signupfieldsvalidationschema from "../../models/validationschemas/signupfieldsvalidationschema.js"
                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.post('/',  signupfieldsvalidator(signupfieldsvalidationschema) ,signupController);

export default router;