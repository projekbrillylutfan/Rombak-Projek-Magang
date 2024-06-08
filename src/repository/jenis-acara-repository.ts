import { JenisAcara } from "@prisma/client";
import { CreateJenisAcaraRequest } from "../model/dto/jenis-acara-dto";
import { prismaClient } from "../application/database";

class JenisAcaraRepository {
    static async createJenisAcara(data: CreateJenisAcaraRequest): Promise<JenisAcara> {
        return await prismaClient.jenisAcara.create({
            data: data
        })
    }
}

export default JenisAcaraRepository