import { Router } from "express";
import  express  from "express";
import logoutController from "./logoutController/logoutController.js";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
//router.use(express.static('public/Log out options page'));

router.post('/',logoutController);


export default router;