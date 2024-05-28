import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prismaClient } from "../application/database";
import { UserRequest } from "../type/user-request";

const JWT_SECRET = "RAHASIAMUEHEHEH";
export const authMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;

  if (!token) {
    return res
      .status(401)
      .json({
        status: 401,
        errors: "Unauthorized",
        data: null,
      })
      .end();
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { username: string }; // Verifikasi token

    const user = await prismaClient.user.findUnique({
      where: {
        username: decoded.username, // Asumsikan JWT mengandung userId
      },
    });

    if (!user) {
      return res
        .status(401)
        .json({
          status: 401,
          errors: "Unauthorized",
          data: null,
        })
        .end();
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({
        status: 401,
        errors: "Unauthorized",
        data: null,
      })
      .end();
  }
};
