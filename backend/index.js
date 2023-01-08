/// Библиотеки и прочее
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import * as mongodb from './utilities/mongodb.js';

/// Роуты
import authRouter from './routes/auth.route.js';

/// Выбор конфигурации
if (process.env.NODE_ENV === undefined) {
    console.log('NODE_ENV not specified. Set Development Mode.');
    process.env.NODE_ENV = 'development';
}
console.log(`Starting API in ${process.env.NODE_ENV} ENV...`);
dotenv.config({path: `../.env.${process.env.NODE_ENV}`});

await mongodb.init(); // инициализация БД

const app = express(); // инициализация API

app.use(morgan('common')); // логгер

app.use(express.json()); // для работы с json body

/// Роуты
app.use('/auth', authRouter); // аутентификация и авторизация

/// Swagger
const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Поварёшка',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.route.js'],
};

const openapiSpecification = swaggerJSDoc(options);

app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(process.env.API_PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    
    console.log(`API started on port ${process.env.API_PORT}.`);
});