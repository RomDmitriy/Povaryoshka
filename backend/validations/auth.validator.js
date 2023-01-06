import { body } from 'express-validator';

export const registerValidators = [
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),
    body('fullName').isLength({min: 3, max: 64}),
    body('avatarUrl').optional().isURL(),
];

export const loginValidators = [
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),
];