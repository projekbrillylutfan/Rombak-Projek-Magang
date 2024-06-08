import { NextFunction, Request, Response } from "express";
import {
  CreateLokasiRequest,
  UpdateLokasiRequest,
} from "../model/dto/lokasi-dto";
import LokasiService from "../service/lokasi-service";

class LokasiController {
  static async createLokasi(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateLokasiRequest = req.body as CreateLokasiRequest;
      const response = await LokasiService.createLokasi(request);
      res.status(200).json({
        status: 200,
        message: "success create lokasi",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async updateLokasi(req: Request, res: Response, next: NextFunction) {
    try {
      const updateReq: UpdateLokasiRequest = req.body as UpdateLokasiRequest;
      updateReq.id = Number(req.params.id);
      const response = await LokasiService.updateLokasi(updateReq);
      res.status(200).json({
        status: 200,
        message: "success update lokasi",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async deleteLokasi(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const response = await LokasiService.deleteLokasi(id);
      res.status(200).json({
        status: 200,
        message: "success delete lokasi",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getAllLokasi(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await LokasiService.getAllLokasi();
      res.status(200).json({
        status: 200,
        message: "success get all lokasi",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}

export default LokasiController;
