import { Router } from "express";
import express from "express";
import profileController from "./profileController/profileController.js";
import jwtAuthenticator from "../../middlewareutilities/authenticateJwt.js";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(
    (req, res, next) => {
        if (req.session.isAuth) {
            console.log('CLEARED TO REACH THE PROFILE PAGE')
            next()
        }else {
            // please research on proper status code for unauthorized.
            // for now, I think unauthorized errors have a status code of 400.
            // frontend might trigger redirect to the login page
            
            res.status(400).json({message: 'you are not authorized.'});
        }

    },
express.static('public/Profile Page 1'));

//router.get('/', jwtAuthenticator, profileController)
//router.get('/', profileController);

export default router;