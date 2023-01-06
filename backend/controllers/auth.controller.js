import { generateTokens } from "../utilities/jwt.js";

export class AuthController {
    async registerUser(req, res) {
        const tokens = generateTokens({id: 1});
        res.json(tokens);
    }

    async loginUser(req, res) {
        res.json(true);
    }
}