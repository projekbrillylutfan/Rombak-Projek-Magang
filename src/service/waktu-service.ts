import {
  CreateWaktuRequest,
  DeleteWaktuRequest,
  UpdateWaktuRequest,
  WaktuResponse,
  WaktuResponseJoin,
} from "../model/dto/waktu-dto";
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
    };

    const createReq = Validation.validate(
      WaktuValidation.CREATE,
      transformedData
    );

    await AgendaRepository.checkIdAgenda(createReq.agendaId);

    const waktu = await WaktuRespository.createWaktu(createReq);

    return toWaktuResponse(waktu);
  }

  static async updateWaktu(req: UpdateWaktuRequest): Promise<WaktuResponse> {
    const transformedData = {
      ...req,
      tanggal: new Date(req.tanggal),
      jamMulai: new Date(req.jamMulai),
      jamSelesai: new Date(req.jamSelesai),
    };

    const updateReq = Validation.validate(
      WaktuValidation.UPDATE,
      transformedData
    );

    await AgendaRepository.checkIdAgenda(updateReq.agendaId);
    await WaktuRespository.checkIdWaktu(updateReq.id);

    const waktuUpdate = await WaktuRespository.updateWaktu(updateReq);

    return toWaktuResponse(waktuUpdate);
  }

  static async deleteWaktu(req: DeleteWaktuRequest): Promise<WaktuResponse> {
    const delteReq = Validation.validate(WaktuValidation.DELETE, req);

    await AgendaRepository.checkIdAgenda(delteReq.agendaId);
    await WaktuRespository.checkIdWaktu(delteReq.id);

    const deleteWaktu = await WaktuRespository.deleteWaktu(delteReq.id);

    return toWaktuResponse(deleteWaktu);
  }

  static async getAllWaktu(): Promise<Array<WaktuResponse>> {
    const waktus = await WaktuRespository.getAllWaktu();

    return waktus.map((waktu) => toWaktuResponse(waktu));
  }

  static async getWaktuById(id: number): Promise<WaktuResponseJoin> {
    const request = Validation.validate(WaktuValidation.GETBYID, { id });
    const waktu = await WaktuRespository.getWaktuById(request.id);

    return waktu;
  }
}

export default WaktuService;
