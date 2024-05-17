
import {Router} from "express";

import authChecker from "../../middlewareutilities/authChecker.js";

import getaffiliatedbusinessController from "./getaffiliatedbusinessesController/getaffiliatedbusinessesController.js";
import mybusinessController from "./getaffiliatedbusinessesController/mybusinessesController.js";
import individualbusinessController from "./getaffiliatedbusinessesController/individualbusinessController.js";
import express from "express";

// import { Express } from "express";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.use(authChecker,express.static('public/Business Page 1'));


// this is to get all the businesses that exits on the platform.
router.get('/', authChecker ,(req, res, next)=>{
    console.log("get affiliated businesses was hit");
    next();
},getaffiliatedbusinessController);


// this will serve static files for the "my businesses page".
router.get("/getmybusinesses",(req,res,next)=>{
    console.log("get my businesses route was hit")
    next()
}, mybusinessController)

router.get("/individualbusiness",(req,res,next)=>{
    console.log("get individual business route was hit")
    next()
}, individualbusinessController)



export default router;