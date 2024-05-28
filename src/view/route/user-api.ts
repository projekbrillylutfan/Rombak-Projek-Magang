import express from "express";
import cookieParser from "cookie-parser";
import { authMiddleware } from "../../middlware/auth-middleware";
import UserController from "../../controller/user-controller";
import { checkJwtCookie } from "../../middlware/jwt-check";

export const userRouter = express.Router()
userRouter.use(cookieParser());
userRouter.use(checkJwtCookie)
userRouter.use(authMiddleware);

//api user
userRouter.get("/api/users/current", UserController.getUserCurrent)