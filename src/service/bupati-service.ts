import { Bupati } from "@prisma/client"
import BupatiValidation from "../validation/bupati-validation"
import Validation from "../validation/validation"
import { BupatiResponse, CreateBupatiRequest, UpdateBupatiRequest } from "../model/dto/bupati-dto"
import BupatiRepository from "../repository/bupati-repository"
import { toBupatiResponse } from "../model/entity/bupati-entity"
import { prismaClient } from "../application/database"

class BupatiService {
    static async createBupati(req: CreateBupatiRequest): Promise<BupatiResponse> {
        const createRequest = Validation.validate(BupatiValidation.CREATE, req)

        const bupati = await BupatiRepository.createBupati(createRequest)

        return toBupatiResponse(bupati)
    }

    static async updateBupati(req: UpdateBupatiRequest): Promise<BupatiResponse> {
        const updateRequest = Validation.validate(BupatiValidation.UPDATE, req)
        console.log(updateRequest)
        await BupatiRepository.checkBupati(updateRequest.bupati_id)

        const bupatiUpdate = await BupatiRepository.updateBupati(updateRequest)

        return toBupatiResponse(bupatiUpdate);
    }

    static async deleteBupati(id: number): Promise<BupatiResponse> {
        await BupatiRepository.checkBupati(id)

        const bupatiDelete = await BupatiRepository.deleteBupati(id)

        return toBupatiResponse(bupatiDelete)
    }
}

export default BupatiService