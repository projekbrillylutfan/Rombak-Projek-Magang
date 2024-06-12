import { NextFunction, Request, Response } from "express";
import { CreateWaktuRequest, UpdateWaktuRequest } from "../model/dto/waktu-dto";
import WaktuService from "../service/waktu-service";

class WaktuController {
  static async createWaktu(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateWaktuRequest = req.body as CreateWaktuRequest;
      request.agendaId = Number(req.params.agendaId);
      const response = await WaktuService.createWaktu(request);
      res.status(200).json({
        status: 200,
        message: "success create waktu",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async updateWaktu(req: Request, res: Response, next: NextFunction) {
    try {
      const request: UpdateWaktuRequest = req.body as UpdateWaktuRequest;
      request.id = Number(req.params.id);
      request.agendaId = Number(req.params.agendaId);

      const response = await WaktuService.updateWaktu(request);
      res.status(200).json({
        status: 200,
        message: "success update Waktu",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}

export default WaktuController;
