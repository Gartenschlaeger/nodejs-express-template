import { Request, Response } from 'express';

export function getEndpoint(req: Request, res: Response) {
    res.json({
        message: 'OK',
    });
}
