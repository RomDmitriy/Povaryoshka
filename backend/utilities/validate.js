import { validationResult } from "express-validator";
import pkg from 'express';
const { Request, Response, NextFunction } = pkg;

/**
 * Проверка валидаторов, написанных в прошлом middleware
 * @param { Request } req 
 * @param { Response } res 
 * @param { NextFunction } next 
 */
export default function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors.array());
        return;
    }

    next();
}