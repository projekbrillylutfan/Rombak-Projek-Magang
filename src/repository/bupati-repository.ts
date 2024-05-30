import { Bupati } from "@prisma/client";
import { CreateBupatiRequest } from "../model/dto/bupati-dto";
import { prismaClient } from "../application/database";

class BupatiRepository {
    static async createBupati(data: CreateBupatiRequest): Promise<Bupati> {
        return await prismaClient.bupati.create({
            data: data
        })
    }
}

export default BupatiRepository