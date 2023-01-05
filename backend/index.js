import express from 'express';
import authRouter from './routes/auth.route.js';

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
    
    console.log(`Auth server started on port ${PORT}`);
});