import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import validate from '../utilities/validate.js';
import { loginValidators, registerValidators } from '../validations/auth.validator.js';

const authRouter = Router();
const authController = new AuthController();


authRouter.post('/register', registerValidators, validate, authController.registerUser);

authRouter.post('/login', loginValidators, validate, authController.loginUser);

export default authRouter;