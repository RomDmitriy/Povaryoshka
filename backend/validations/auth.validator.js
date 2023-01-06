import { body } from 'express-validator';

export const registerValidators = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Длина пароля должна быть от 6 до 32 символов').isLength({min: 6, max: 32}),
    body('fullName', 'Длина ФИО должна быть от 3 до 64 символов').isLength({min: 3, max: 64})
];

export const loginValidators = [
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),
];