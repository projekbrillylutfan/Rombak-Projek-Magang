import { NextFunction, Request, Response } from "express";
import { CreateBupatiRequest, UpdateBupatiRequest } from "../model/dto/bupati-dto";
import BupatiService from "../service/bupati-service";

class BupatiController {
  static async createBupati(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateBupatiRequest = req.body as CreateBupatiRequest;
      const response = await BupatiService.createBupati(request);
      res.status(200).json({
        status: 200,
        message: "success create bupati",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async updateBupati(req: Request, res: Response, next: NextFunction) {
    try {
        const updateRequest: UpdateBupatiRequest = req.body as UpdateBupatiRequest;
        updateRequest.bupati_id = Number(req.params.id);
        const response = await BupatiService.updateBupati(updateRequest)
        res.status(200).json({
            status: 200,
            message: "success update bupati",
            data: response
        })
    } catch (e) {
      next(e);
    }
  }

  static async deleteBupati(req: Request, res: Response, next: NextFunction) {
    try {
      const bupati_id = Number(req.params.id);
      const response = await BupatiService.deleteBupati(bupati_id);
      res.status(200).json({
        status: 200,
        message: "success delete bupati",
        data: response,
      })
    } catch (e) {
      next(e);
    }
  }
}

export default BupatiController;
