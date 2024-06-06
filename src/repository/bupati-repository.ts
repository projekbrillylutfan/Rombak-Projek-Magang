import { Bupati } from "@prisma/client";
import {
  CreateBupatiRequest,
  UpdateBupatiRequest,
} from "../model/dto/bupati-dto";
import { prismaClient } from "../application/database";
import ResponseError from "../error/response-error";

class BupatiRepository {
  static async createBupati(data: CreateBupatiRequest): Promise<Bupati> {
    return await prismaClient.bupati.create({
      data: data,
    });
  }

  static async checkBupati(bupati_id: number): Promise<Bupati> {
    const bupati = await prismaClient.bupati.findFirst({
      where: {
        bupati_id: bupati_id,
      },
    });

    if (!bupati) {
      throw new ResponseError(404, "Bupati not found");
    }

    return bupati;
  }

  static async updateBupati(req: UpdateBupatiRequest): Promise<Bupati> {
    return await prismaClient.bupati.update({
      where: {
        bupati_id: req.bupati_id,
      },
      data: req,
    });
  }

  static async deleteBupati(bupati_id: number): Promise<Bupati> {
      return await prismaClient.bupati.delete({
          where: {
              bupati_id: bupati_id
          }
      })
  }
}

export default BupatiRepository;
