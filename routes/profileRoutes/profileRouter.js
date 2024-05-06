import { Router } from "express";
import express from "express";
import authChecker from "../../middlewareutilities/authChecker.js";import passwordController from "../passwordRoutes/passwordController/passwordController.js";
import profileController from "./profileController/profileController.js";
// middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// protected Routes;
router.use(authChecker,express.static('public/Profile Page 1'));

router.get('/',authChecker,profileController);

//router.get('/', jwtAuthenticator, profileController)
//router.get('/', profileController);

export default router;