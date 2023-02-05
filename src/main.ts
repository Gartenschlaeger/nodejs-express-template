import express from 'express';
import { getEndpoint } from './endpoints';
import { authorizationMiddleware, notFoundMiddleware } from './middlewares';

const port = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', authorizationMiddleware, getEndpoint);

app.use(notFoundMiddleware);

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`);
});
