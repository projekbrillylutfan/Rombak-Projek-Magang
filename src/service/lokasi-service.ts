import { CreateLokasiRequest, LokasiResponse, UpdateLokasiRequest } from "../model/dto/lokasi-dto";
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

    static async updateLokasi(req: UpdateLokasiRequest): Promise<LokasiResponse> {
        const updateLokasi = Validation.validate(LokasiValidation.UPDATE, req);
        await LokasiRepository.checkLokasi(updateLokasi.id);

        const lokasiUpdate = await LokasiRepository.updateLokasi(updateLokasi);

        return toLokasiResponse(lokasiUpdate);
    }

    static async deleteLokasi(id: number): Promise<LokasiResponse> {
        await LokasiRepository.checkLokasi(id);
        const lokasiDelete = await LokasiRepository.deleteLokasi(id);
        return toLokasiResponse(lokasiDelete);
    }

    static async getAllLokasi(): Promise<LokasiResponse[]> {
        const lokasies = await LokasiRepository.getAllLokasi();

        return lokasies.map((lokasi) => toLokasiResponse(lokasi));
    }

    static async getLokasiById(id: number): Promise<LokasiResponse> {
        const lokasi = await LokasiRepository.checkLokasi(id);

        return toLokasiResponse(lokasi);
    }
 }

export default LokasiService