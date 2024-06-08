import { JenisAcara } from "@prisma/client";
import { CreateJenisAcaraRequest, UpdateJenisAcaraRequest } from "../model/dto/jenis-acara-dto";
import { prismaClient } from "../application/database";
import ResponseError from "../error/response-error";

class JenisAcaraRepository {
    static async createJenisAcara(data: CreateJenisAcaraRequest): Promise<JenisAcara> {
        return await prismaClient.jenisAcara.create({
            data: data
        })
    }

    static async checkJenisAcara(id: number): Promise<JenisAcara> {
        const jenisAcara = await prismaClient.jenisAcara.findFirst({
            where: {
                id: id
            }
        })

        if (!jenisAcara) {
            throw new ResponseError(404, "Jenis Acara not found")
        }

        return jenisAcara
    }

    static async updateJenisAcara(req: UpdateJenisAcaraRequest): Promise<JenisAcara> {
        return await prismaClient.jenisAcara.update({
            where: {
                id: req.id
            },
            data: req
        })
    }

    static async deleteJenisAcara(id: number): Promise<JenisAcara> {
        return await prismaClient.jenisAcara.delete({
            where: {
                id: id
            }
        })
    }

    static async getAllJenisAcara(): Promise<JenisAcara[]> {
        return await prismaClient.jenisAcara.findMany()
    }
}

export default JenisAcaraRepository