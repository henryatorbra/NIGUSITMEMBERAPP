import { Router } from "express";
import loginController from "./loginController/loginController.js";
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

//ROUTES;
router.post('/', loginController);

export default router;