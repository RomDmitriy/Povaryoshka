import jwt from 'jsonwebtoken';

const jwtAccessTokenExpirationMS = 900; // 15 минут
const jwtRefreshTokenExpirationMS = 2592000; // 30 дней

/**
 * Информация о пользователе, которая хранится в JWT токене
 * @typedef {Object} UserData
 * @property {number} id ID пользователя
 */
/** Объект к Access и Refresh токенами
 * @typedef {Object} JWTtokens
 * @property {jwt.Jwt} access_token Токен для аутентификации к API
 * @property {jwt.Jwt} refresh_token Токен для обновление access_token
 */
/** Генератор JWT токенов
 * @param {UserData} userData Любые пользовательские данные в токене
 * @returns {JWTtokens} Токены пользователя
 */
export function generateTokens(userData) {
    const access_token = jwt.sign(userData, process.env.JWT_TOKEN, {expiresIn: jwtAccessTokenExpirationMS});
    const refresh_token = jwt.sign(userData, process.env.JWT_TOKEN, {expiresIn: jwtRefreshTokenExpirationMS});
    return {access_token, refresh_token};
}