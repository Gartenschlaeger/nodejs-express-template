import { Request, Response, NextFunction } from 'express';

export function authorizationMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).send('Unauthorized');
    }

    const token = authHeader.split(' ')[1];
    if (!token || token !== '1234') {
        return res.status(403).send('Unauthorized');
    }

    next();
}
