import UserModel from "../models/User.model.js";
import { generateTokens } from "../utilities/jwt.js";

import * as bcrypt from 'bcrypt';

export class AuthController {
    async registerUser(req, res) {
        try {
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(req.body.password, salt);

            const doc = new UserModel({
                email: req.body.email,
                password: passwordHash,
                fullName: req.body.fullName,
                avatarUrl: req.body.avatarUrl
            });

            const user = await doc.save();

            const tokens = generateTokens({id: user._id});
            res.json(tokens);
        } catch (err) {
            if (err.code === 11000) {
                res.status(409).end();
            }
        }
    }

    async loginUser(req, res) {
        res.json(true);
    }
}