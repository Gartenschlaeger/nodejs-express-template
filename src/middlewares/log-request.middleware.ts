import { NextFunction, Request, Response } from 'express';

export function logRequestMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('Request', req.method, req.path);

    next();
}
