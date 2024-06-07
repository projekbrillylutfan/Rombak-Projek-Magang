import { Lokasi } from "@prisma/client";
import { CreateLokasiRequest } from "../model/dto/lokasi-dto";
import { prismaClient } from "../application/database";

class LokasiRepository {
    static async createLokasi(data: CreateLokasiRequest): Promise<Lokasi> {
        return await prismaClient.lokasi.create({
            data: data
        })
    }
}

export default LokasiRepository