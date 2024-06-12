import { Agenda } from "@prisma/client";
import {
  AgendaResponseJoin,
  CreateAgendaRequest,
  UpdateAgendaRequest,
} from "../model/dto/agenda-dto";
import { prismaClient } from "../application/database";
import ResponseError from "../error/response-error";

class AgendaRepository {
  static async createAgenda(data: CreateAgendaRequest): Promise<Agenda> {
    return await prismaClient.agenda.create({
      data: data,
    });
  }

  static async getAllAgenda(): Promise<Agenda[]> {
    return await prismaClient.agenda.findMany();
  }

  static async getAgendaById(id: number): Promise<AgendaResponseJoin> {
    const agenda = await prismaClient.agenda.findUnique({
      where: {
        id: id,
      },
      include: {
        bupati: {
          select: {
            bupati_id: true,
            nama: true,
            periode: true,
          },
        },
        lokasi: {
          select: {
            id: true,
            nama_lokasi: true,
            alamat: true,
          },
        },
        jenisAcara: {
          select: {
            id: true,
            jenis_acara: true,
          },
        },
      },
    });

    if (!agenda) {
      throw new ResponseError(400, "Agenda not found");
    }

    return agenda;
  }

  static async checkIdAgenda(id: number): Promise<Agenda> {
    const agenda =  await prismaClient.agenda.findUnique({
      where: {
        id: id,
      },
    });

    if (!agenda) {
      throw new ResponseError(400, "Agenda not found");
    }

    return agenda
  }

  static async updateAgenda(req: UpdateAgendaRequest): Promise<Agenda> {
    return await prismaClient.agenda.update({
      where: {
        id: req.id,
        bupatiId: req.bupatiId,
        lokasiId: req.lokasiId,
        jenisAcaraId: req.jenisAcaraId,
      },
      data: req,
    })
  }

  static async deleteAgenda(id: number): Promise<Agenda> {
    return await prismaClient.agenda.delete({
      where: {
        id: id
      }
    })
  }
}

export default AgendaRepository;
