import { NextFunction, Request, Response } from "express";
import {
  CreateAgendaRequest,
  DeleteAgendaRequest,
  UpdateAgendaRequest,
} from "../model/dto/agenda-dto";
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

  static async getAllAgenda(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AgendaService.getAllAgenda();
      res.status(200).json({
        status: 200,
        message: "success get all agenda",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getAgendaById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const response = await AgendaService.getAgendaById(id);
      res.status(200).json({
        status: 200,
        message: "success get agenda by id",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async updateAgenda(req: Request, res: Response, next: NextFunction) {
    try {
      const request: UpdateAgendaRequest = req.body as UpdateAgendaRequest;
      request.id = Number(req.params.id);
      request.bupatiId = Number(req.params.bupatiId);
      request.lokasiId = Number(req.params.lokasiId);
      request.jenisAcaraId = Number(req.params.jenisAcaraId);

      const response = await AgendaService.updateAgenda(request);

      res.status(200).json({
        status: 200,
        message: "success update agenda",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async deleteAgenda(req: Request, res: Response, next: NextFunction) {
    try {
      const request: DeleteAgendaRequest = {
        id: Number(req.params.id),
        bupatiId: Number(req.params.bupatiId),
        lokasiId: Number(req.params.lokasiId),
        jenisAcaraId: Number(req.params.jenisAcaraId),
      };
      const response = await AgendaService.deleteAgenda(request);
      res.status(200).json({
        status: 200,
        message: "success delete agenda",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}

export default AgendaController;
