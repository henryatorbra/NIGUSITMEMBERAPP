import { Router } from "express";
import signupController from "./signupController/signupController.js";
import bodyParser from "body-parser";

const router = Router()

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.post('/', signupController);

export default router;