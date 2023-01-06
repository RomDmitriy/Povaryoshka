import express from 'express';
import * as dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';

if (process.env.NODE_ENV === undefined) {
    console.log('NODE_ENV not specified. Set Production Mode.');
    process.env.NODE_ENV = 'production';
}

console.log(`Starting API in ${process.env.NODE_ENV} ENV...`);
dotenv.config({path: '../.env.development'});

// будет перенесено в .env
const PORT = 5000;

const app = express();

app.use(express.json()); // для работы с json body

/// Роуты
app.use('/auth', authRouter); // аутентификация и авторизация

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    
    console.log(`API started on port ${PORT}`);
});