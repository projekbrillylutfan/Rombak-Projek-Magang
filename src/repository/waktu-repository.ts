import { Waktu } from "@prisma/client";
import {
  CreateWaktuRequest,
  UpdateWaktuRequest,
  WaktuResponseJoin,
} from "../model/dto/waktu-dto";
import { prismaClient } from "../application/database";
import ResponseError from "../error/response-error";

class WaktuRespository {
  static async createWaktu(data: CreateWaktuRequest): Promise<Waktu> {
    return await prismaClient.waktu.create({
      data: data,
    });
  }

  static async checkIdWaktu(id: number): Promise<Waktu> {
    const waktu = await prismaClient.waktu.findFirst({
      where: {
        id: id,
      },
    });

    if (!waktu) {
      throw new ResponseError(404, "Waktu not found");
    }

    return waktu;
  }

  static async updateWaktu(req: UpdateWaktuRequest): Promise<Waktu> {
    return await prismaClient.waktu.update({
      where: {
        id: req.id,
        agendaId: req.agendaId,
      },
      data: req,
    });
  }

  static async deleteWaktu(id: number): Promise<Waktu> {
    return await prismaClient.waktu.delete({
      where: {
        id: id,
      },
    });
  }

  static async getAllWaktu(): Promise<Waktu[]> {
    return await prismaClient.waktu.findMany();
  }

  static async getWaktuById(id: number): Promise<WaktuResponseJoin> {
    const waktu = await prismaClient.waktu.findUnique({
      where: {
        id: id,
      },
      include: {
        agenda: {
          select: {
            id: true,
            namaAgenda: true,
            deskripsi: true,
          },
        },
      },
    });

    if (!waktu) {
      throw new ResponseError(404, "Waktu not found");
    }

    return waktu;
  }
}

export default WaktuRespository;
