import { body } from 'express-validator';

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),
    body('fullName').split(' ').length === 3,
    body('avatarUrl').optional().isURL()
];