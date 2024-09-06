import express from "express";
import { authControllers } from "../controllers/auth-controller.js";
import { validate } from "../middleware/validate-middleware.js"
import { signupSchema } from "../validators/validate-middleware.js"
import { User } from '../models/user-model.js';
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.route("/signup").post(validate(signupSchema), authControllers.signup);

export { router }