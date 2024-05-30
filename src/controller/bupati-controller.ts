import { NextFunction, Request, Response } from "express";
import { CreateBupatiRequest } from "../model/dto/bupati-dto";
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
}

export default BupatiController;
