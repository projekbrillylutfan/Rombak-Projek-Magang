import { NextFunction, Request, Response } from "express";
import {
  CreateJenisAcaraRequest,
  UpdateJenisAcaraRequest,
} from "../model/dto/jenis-acara-dto";
import JenisAcaraService from "../service/jenis-acara-service";

class JenisAcaraController {
  static async createJenisAcara(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const request: CreateJenisAcaraRequest =
        req.body as CreateJenisAcaraRequest;
      const response = await JenisAcaraService.createJenisAcara(request);
      res.status(200).json({
        status: 200,
        message: "success create jenisacara",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async updateJenisAcara(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const updateRequest: UpdateJenisAcaraRequest =
        req.body as UpdateJenisAcaraRequest;
      updateRequest.id = Number(req.params.id);
      const response = await JenisAcaraService.updateJenisAcara(updateRequest);
      res.status(200).json({
        status: 200,
        message: "success update jenis acara",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async deleteJenisAcara(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = Number(req.params.id);
      const response = await JenisAcaraService.deleteJenisAcara(id);
      res.status(200).json({
        status: 200,
        message: "success delete jenis acara",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getAllJenisAcara(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await JenisAcaraService.getAllJenisAcara();
      res.status(200).json({
        status: 200,
        message: "success get all jenis acara",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getJenisAcaraById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id);
        const response = await JenisAcaraService.getJenisAcaraById(id);
        res.status(200).json({
            status: 200,
            message: "success get jenis acara by id",
            data: response,
        })
    } catch (e) {
      next(e);
    }
  }
}

export default JenisAcaraController;
