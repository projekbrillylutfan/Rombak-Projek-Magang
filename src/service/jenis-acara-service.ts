import { CreateJenisAcaraRequest, JenisAcaraResponse } from "../model/dto/jenis-acara-dto";
import { toJenisAcaraResponse } from "../model/entity/jenis-acara-entity";
import JenisAcaraRepository from "../repository/jenis-acara-repository";
import JenisAcaraValidation from "../validation/jenis-acara-validation";
import Validation from "../validation/validation";

class JenisAcaraService {
    static async createJenisAcara(req: CreateJenisAcaraRequest): Promise<JenisAcaraResponse> {
        const createRequest = Validation.validate(JenisAcaraValidation.CREATE, req)

        const jenisAcara = await JenisAcaraRepository.createJenisAcara(createRequest)

        return toJenisAcaraResponse(jenisAcara)
    }
}

export default JenisAcaraService