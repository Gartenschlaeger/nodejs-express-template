import express from 'express';
import { getEndpoint } from './endpoints/get';
import { authorizationMiddleware } from './middlewares/authorization.middleware';
import { logRequestMiddleware } from './middlewares/log-request.middleware';
import { Environment } from './utilities/environment';

const port = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.json());

if (Environment.isDevelopment()) {
    app.use(logRequestMiddleware);
}

app.get('/', authorizationMiddleware, getEndpoint);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
