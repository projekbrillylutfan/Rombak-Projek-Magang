import { NextFunction, Request, Response } from "express";
import { CreateJenisAcaraRequest } from "../model/dto/jenis-acara-dto";
import JenisAcaraService from "../service/jenis-acara-service";

class JenisAcaraController {
    static async createJenisAcara(req: Request, res: Response, next: NextFunction) {
        try {
            const request: CreateJenisAcaraRequest = req.body as CreateJenisAcaraRequest;
            const response = await JenisAcaraService.createJenisAcara(request);
            res.status(200).json({
                status: 200,
                message: "success create jenisacara",
                data: response,
            })
        } catch (e) {
            next(e);
        }
    }
}

export default JenisAcaraController