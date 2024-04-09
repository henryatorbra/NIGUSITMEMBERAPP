import { Router } from "express";
import express from "express";
import passwordController from "./passwordController/passwordController.js";

                                            // middlewareutilities/signupfieldsvalidator.js
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(express.static('public/Password Page'));

router.post('/',passwordController);

export default router;