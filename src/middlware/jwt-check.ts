import { Request, Response, NextFunction } from 'express';

export const checkJwtCookie = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      errors: "JWT token not found in cookies",
    }).end();
  }

  next();
};
