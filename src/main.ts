import dotenv from 'dotenv';
import express, { Express } from 'express';
import { getEndpoint } from './endpoints/get';
import { authorizationMiddleware } from './middlewares/authorization.middleware';
import { logRequestMiddleware } from './middlewares/log-request.middleware';
import { Environment } from './utilities/environment';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

if (Environment.isDevelopment()) {
    app.use(logRequestMiddleware);
}

app.get('/', authorizationMiddleware, getEndpoint);

app.listen(port, () => {
    console.log(`Server is listening at https://localhost.kaisnet.de`);
});
