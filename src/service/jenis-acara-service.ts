import { CreateJenisAcaraRequest, JenisAcaraResponse, UpdateJenisAcaraRequest } from "../model/dto/jenis-acara-dto";
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

    static async updateJenisAcara(req: UpdateJenisAcaraRequest): Promise<JenisAcaraResponse> {
        const updateRequest = Validation.validate(JenisAcaraValidation.UPDATE, req)
        await JenisAcaraRepository.checkJenisAcara(updateRequest.id)

        const jenisAcaraUpdate = await JenisAcaraRepository.updateJenisAcara(updateRequest)

        return toJenisAcaraResponse(jenisAcaraUpdate);
    }

    static async deleteJenisAcara(id: number): Promise<JenisAcaraResponse> {
        await JenisAcaraRepository.checkJenisAcara(id)

        const jenisAcaraDelete = await JenisAcaraRepository.deleteJenisAcara(id)

        return toJenisAcaraResponse(jenisAcaraDelete)
    }
}

export default JenisAcaraService