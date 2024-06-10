import { Agenda } from "@prisma/client";
import { CreateAgendaRequest } from "../model/dto/agenda-dto";
import { prismaClient } from "../application/database";

class AgendaRepository {
    static async createAgenda(data: CreateAgendaRequest): Promise<Agenda> {
        return await prismaClient.agenda.create({
            data: data
        })
    }
}

export default AgendaRepository