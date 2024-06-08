import express from "express";
import cookieParser from "cookie-parser";
import { authMiddleware } from "../../middlware/auth-middleware";
import UserController from "../../controller/user-controller";
import BupatiController from "../../controller/bupati-controller";
import LokasiController from "../../controller/lokasi-contoller";

export const userRouter = express.Router()
userRouter.use(cookieParser());
userRouter.use(authMiddleware);

//api user
userRouter.get("/api/users/current", UserController.getUserCurrent)
userRouter.put("/api/users/update", UserController.updateUser)

//api Bupati
userRouter.get("/api/bupati", BupatiController.getAllBupati)
userRouter.get("/api/bupati/:id", BupatiController.getBupatiById)

//api lokasi
userRouter.get("/api/lokasi", LokasiController.getAllLokasi)