import express from "express";
import cookieParser from "cookie-parser";
import { authMiddleware } from "../../middlware/auth-middleware";
import UserController from "../../controller/user-controller";
import BupatiController from "../../controller/bupati-controller";
import LokasiController from "../../controller/lokasi-contoller";
import JenisAcaraController from "../../controller/jenis-acara-controller";
import AgendaController from "../../controller/agenda-controller";

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
userRouter.get("/api/lokasi/:id", LokasiController.getLokasiById)

//api jenis acara
userRouter.get("/api/jenis-acara", JenisAcaraController.getAllJenisAcara)
userRouter.get("/api/jenis-acara/:id", JenisAcaraController.getJenisAcaraById)

//api agenda
userRouter.get("/api/agenda", AgendaController.getAllAgenda)
userRouter.get("/api/agenda/:id", AgendaController.getAgendaById)