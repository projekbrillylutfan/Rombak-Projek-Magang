import { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { prismaClient } from "../application/database";

const JWT_SECRET = "RAHASIAMUEHEHEH";

interface JwtPayload {
  username: string;
}

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      status: 401,
      errors: "token not found",
      data: null,
    });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const user = await prismaClient.user.findUnique({
      where: {
        username: decode.username,
      },
    });

    if (user && user.role === "admin") {
      next();
    } else {
      res.status(403).json({
        status: 403,
        errors: "Access denied",
        data: null,
      });
    }
  } catch (e) {
    res.status(401).json({
      status: 401,
      errors: "Invalid token",
      data: null,
    });
  }
};

export default isAdmin;
