import { CreateLokasiRequest, LokasiResponse } from "../model/dto/lokasi-dto";
import { toLokasiResponse } from "../model/entity/lokasi-entity";
import LokasiRepository from "../repository/lokasi-repository";
import LokasiValidation from "../validation/lokasi-validation";
import Validation from "../validation/validation";

class LokasiService {
    static async createLokasi(req: CreateLokasiRequest): Promise<LokasiResponse> {
        const lokasiRequest = Validation.validate(LokasiValidation.CREATE, req);

        const lokasi = await LokasiRepository.createLokasi(lokasiRequest);

        return toLokasiResponse(lokasi);
    }
}

export default LokasiService