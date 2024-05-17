import { Router } from "express";
import express from "express";
import qrcodeController from "./qrcodeController/qrcodeController.js";
import authChecker from "../../middlewareutilities/authChecker.js";
import getqrcodeController from "./qrcodeController/getqrcodeController.js";
import userfromqrcodeController from "../qrcodeRoutes/qrcodeController/userfromqrcodeController.js"
                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use('/', (req, res, next)=>{
    req.session.qrcode = true
    next();
},authChecker,express.static('public/QR code page'));

router.get('/',authChecker,getqrcodeController);
router.post('/',authChecker,qrcodeController);

router.use('/userfromqrcode', express.static("public/userprofilepagefromqrcode "))
router.get('/userfromqrcode',userfromqrcodeController)

export default router;