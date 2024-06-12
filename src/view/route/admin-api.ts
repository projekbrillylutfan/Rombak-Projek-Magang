import cookieParser from "cookie-parser";
import express from "express";
import { authMiddleware } from "../../middlware/auth-middleware";
import isAdmin from "../../middlware/auth-admin-middlware";
import BupatiController from "../../controller/bupati-controller";
import LokasiController from "../../controller/lokasi-contoller";
import JenisAcaraController from "../../controller/jenis-acara-controller";
import AgendaController from "../../controller/agenda-controller";
import WaktuController from "../../controller/waktu-controller";

export const adminRouter = express.Router();
adminRouter.use(cookieParser());
adminRouter.use(authMiddleware);
adminRouter.use(isAdmin)

//bupati route
adminRouter.post("/api/admin/bupati/create", BupatiController.createBupati)
adminRouter.put("/api/admin/bupati/update/:id", BupatiController.updateBupati)
adminRouter.delete("/api/admin/bupati/delete/:id", BupatiController.deleteBupati)

//lokasi route
adminRouter.post("/api/admin/lokasi/create", LokasiController.createLokasi)
adminRouter.put("/api/admin/lokasi/update/:id", LokasiController.updateLokasi)
adminRouter.delete("/api/admin/lokasi/delete/:id", LokasiController.deleteLokasi)

//jenis acara route
adminRouter.post("/api/admin/jenisacara/create", JenisAcaraController.createJenisAcara)
adminRouter.put("/api/admin/jenisacara/update/:id", JenisAcaraController.updateJenisAcara)
adminRouter.delete("/api/admin/jenisacara/delete/:id", JenisAcaraController.deleteJenisAcara)

//agenda
adminRouter.post("/api/admin/agenda/create/:bupatiId/:lokasiId/:jenisAcaraId", AgendaController.createAgenda)
adminRouter.put("/api/admin/agenda/update/:id/:bupatiId/:lokasiId/:jenisAcaraId", AgendaController.updateAgenda)
adminRouter.delete("/api/admin/agenda/delete/:id/:bupatiId/:lokasiId/:jenisAcaraId", AgendaController.deleteAgenda)

//waktu
adminRouter.post("/api/admin/waktu/create/:agendaId", WaktuController.createWaktu)
adminRouter.put("/api/admin/waktu/update/:id/:agendaId", WaktuController.updateWaktu)