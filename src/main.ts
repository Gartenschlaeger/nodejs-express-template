import express from 'express';
import { getEndpoint } from './endpoints/get';
import { authorizationMiddleware } from './middlewares/authorization.middleware';

const port = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', authorizationMiddleware, getEndpoint);

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`);
});
