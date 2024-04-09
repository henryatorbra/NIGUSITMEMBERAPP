import { Router } from "express";
import express from "express";
import profileController from "./profileController/profileController.js";
import jwtAuthenticator from "../../middlewareutilities/authenticateJwt.js";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
//router.use(express.static('public/Profile Page 1'));

//router.get('/', jwtAuthenticator, profileController)
router.get('/', jwtAuthenticator, profileController);

export default router;