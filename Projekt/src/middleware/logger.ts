import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, new Date().toISOString());
  next();
};

export default logger;