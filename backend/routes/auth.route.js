import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import validate from '../utilities/validate.js';
import { loginValidators, registerValidators } from '../validations/auth.validator.js';

const authRouter = Router();
const authController = new AuthController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tokens:
 *       type: object
 *       required:
 *         - access_token
 *         - refresh_token
 *       properties:
 *         access_token:
 *           type: string
 *         refresh_token:
 *           type: string
 */

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Регистрация.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - fullName
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *                 description: от 8 до 64 символов
 *               fullName:
 *                 type: string
 *                 description: ФИО пользователя
 *     responses:
 *       201:
 *         description: Пользователь зарегистрирован. Возвращает JWT токены.
 *         content:
 *           application/json:
 *             schema: {$ref: '#components/schemas/Tokens'}
 *       400:
 *         description: Валидация входных данных не пройдена
 */
authRouter.post('/register', registerValidators, validate, authController.registerUser);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Аутентификация через почту-пароль.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *                 description: от 8 до 64 символов
 *     responses:
 *       200:
 *         description: Возвращает JWT токены.
 *         content:
 *           application/json:
 *             schema: {$ref: '#components/schemas/Tokens'}
 *       400:
 *         description: Валидация входных данных не пройдена
 */
authRouter.post('/login', loginValidators, validate, authController.loginUser);

export default authRouter;