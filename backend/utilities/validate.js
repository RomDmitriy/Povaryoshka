import { validationResult } from "express-validator";

export default function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors.array());
        return;
    }

    next();
}