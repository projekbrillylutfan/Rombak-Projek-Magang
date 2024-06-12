import { CreateWaktuRequest, WaktuResponse } from "../model/dto/waktu-dto";
import { toWaktuResponse } from "../model/entity/waktu-entity";
import AgendaRepository from "../repository/agenda-repository";
import WaktuRespository from "../repository/waktu-repository";
import Validation from "../validation/validation";
import WaktuValidation from "../validation/waktu-validation";

class WaktuService {
    static async createWaktu(req: CreateWaktuRequest): Promise<WaktuResponse> {
        const transformedData = {
            ...req,
            tanggal: new Date(req.tanggal),
            jamMulai: new Date(req.jamMulai),
            jamSelesai: new Date(req.jamSelesai),
        }

        const createReq = Validation.validate(WaktuValidation.CREATE, transformedData)

        await AgendaRepository.checkIdAgenda(createReq.agendaId)

        const waktu = await WaktuRespository.createWaktu(createReq)

        return toWaktuResponse(waktu)
    }
}

export default WaktuService