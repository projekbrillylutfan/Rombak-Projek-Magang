import { Agenda } from "@prisma/client";
import { CreateAgendaRequest } from "../model/dto/agenda-dto";
import { prismaClient } from "../application/database";

class AgendaRepository {
    static async createAgenda(data: CreateAgendaRequest): Promise<Agenda> {
        return await prismaClient.agenda.create({
            data: data
        })
    }

    static async getAllAgenda(): Promise<Agenda[]> {
        return await prismaClient.agenda.findMany()
    }

    static async getAgendaById(id: number): Promise<Agenda> {
        const agenda = await prismaClient.agenda.findUnique({
            where: {
                id: id
            },
            include: {
                bupati: true,
                lokasi: true,
                jenisAcara: true
            }
        })

        if (!agenda) {
            throw new Error("Agenda not found")
        }
        
        return agenda
    }
}

export default AgendaRepository