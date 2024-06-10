import { Agenda } from "@prisma/client";
import {
  AgendaResponseJoin,
  CreateAgendaRequest,
} from "../model/dto/agenda-dto";
import { prismaClient } from "../application/database";

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
      throw new Error("Agenda not found");
    }

    return agenda;
  }
}

export default AgendaRepository;
