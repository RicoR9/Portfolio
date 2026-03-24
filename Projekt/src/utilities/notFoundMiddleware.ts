import { Request, Response, NextFunction } from 'express';
import CustomError from '../config/CustomError';

const notFoundMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return next(new CustomError('Not found.', 404))
};

export default notFoundMiddleware;
