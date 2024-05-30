import express from "express";
import cookieParser from "cookie-parser";
import { authMiddleware } from "../../middlware/auth-middleware";
import UserController from "../../controller/user-controller";

export const userRouter = express.Router()
userRouter.use(cookieParser());
userRouter.use(authMiddleware);

//api user
userRouter.get("/api/users/current", UserController.getUserCurrent)
userRouter.put("/api/users/update", UserController.updateUser)