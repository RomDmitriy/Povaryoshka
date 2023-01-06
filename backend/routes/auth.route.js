import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { registerValidation } from '../validations/auth.validator.js';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/register', registerValidation, authController.registerUser);

authRouter.post('/login', authController.loginUser);

export default authRouter;