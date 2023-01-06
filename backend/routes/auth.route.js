import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { loginValidation, registerValidation } from '../validations/auth.validator.js';

const authRouter = Router();
const authController = new AuthController();

//TODO: валидация почему-то пропускается
authRouter.post('/register', registerValidation, authController.registerUser);

authRouter.post('/login', loginValidation, authController.loginUser);

export default authRouter;