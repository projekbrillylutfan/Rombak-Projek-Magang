import { NextFunction, Request, Response } from "express";
import { CreateAgendaRequest } from "../model/dto/agenda-dto";
import AgendaService from "../service/agenda-service";

class AgendaController {
  static async createAgenda(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateAgendaRequest = req.body as CreateAgendaRequest;
      request.bupatiId = Number(req.params.bupatiId);
      request.lokasiId = Number(req.params.lokasiId);
      request.jenisAcaraId = Number(req.params.jenisAcaraId);
      const response = await AgendaService.createAgenda(request);
      res.status(200).json({
        status: 200,
        message: "success create agenda",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}

export default AgendaController;
