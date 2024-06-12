import { Waktu } from "@prisma/client";
import { CreateWaktuRequest } from "../model/dto/waktu-dto";
import { prismaClient } from "../application/database";

class WaktuRespository {
    static async createWaktu(data: CreateWaktuRequest): Promise<Waktu> {
        return await prismaClient.waktu.create({
            data: data
        })
    }
}

export default WaktuRespository