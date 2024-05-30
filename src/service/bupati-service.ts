import { Bupati } from "@prisma/client"
import BupatiValidation from "../validation/bupati-validation"
import Validation from "../validation/validation"
import { BupatiResponse, CreateBupatiRequest } from "../model/dto/bupati-dto"
import BupatiRepository from "../repository/bupati-repository"
import { toBupatiResponse } from "../model/entity/bupati-entity"

class BupatiService {
    static async createBupati(req: CreateBupatiRequest): Promise<BupatiResponse> {
        const createRequest = Validation.validate(BupatiValidation.CREATE, req)

        const bupati = await BupatiRepository.createBupati(createRequest)

        return toBupatiResponse(bupati)
    }
}

export default BupatiService