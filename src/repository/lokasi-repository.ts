import { Lokasi } from "@prisma/client";
import { CreateLokasiRequest, UpdateLokasiRequest } from "../model/dto/lokasi-dto";
import { prismaClient } from "../application/database";
import ResponseError from "../error/response-error";

class LokasiRepository {
    static async createLokasi(data: CreateLokasiRequest): Promise<Lokasi> {
        return await prismaClient.lokasi.create({
            data: data
        })
    }

    static async checkLokasi(id: number): Promise<Lokasi> {
        const lokasi = await prismaClient.lokasi.findFirst({
            where: {
                id: id
            }
        })

        if (!lokasi) {
            throw new ResponseError(404, "Lokasi not found")
        }

        return lokasi
    }

    static async updateLokasi(data: UpdateLokasiRequest): Promise<Lokasi> {
        return await prismaClient.lokasi.update({
            where: {
                id: data.id
            },
            data: data
        })
    }

    static async deleteLokasi(id: number): Promise<Lokasi> {
        return await prismaClient.lokasi.delete({
            where: {
                id: id
            }
        })
    }
}

export default LokasiRepository