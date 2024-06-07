import { NextFunction, Request, Response } from "express";
import { CreateLokasiRequest } from "../model/dto/lokasi-dto";
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
            })
        } catch (e) {
            next(e);
        }
    }
}

export default LokasiController