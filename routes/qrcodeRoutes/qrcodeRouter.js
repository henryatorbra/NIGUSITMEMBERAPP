import { Router } from "express";
import express from "express";
import qrcodeController from "./qrcodeController/qrcodeController.js";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(express.static('public/QR code page'));


router.post('/',qrcodeController);

export default router;