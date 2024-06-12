import {
  AgendaResponse,
  AgendaResponseJoin,
  CreateAgendaRequest,
  DeleteAgendaRequest,
  UpdateAgendaRequest,
} from "../model/dto/agenda-dto";
import { toAgendaResponse } from "../model/entity/agenda-entity";
import AgendaRepository from "../repository/agenda-repository";
import BupatiRepository from "../repository/bupati-repository";
import JenisAcaraRepository from "../repository/jenis-acara-repository";
import LokasiRepository from "../repository/lokasi-repository";
import AgendaValidation from "../validation/agenda-validation";
import Validation from "../validation/validation";

class AgendaService {
  static async createAgenda(req: CreateAgendaRequest): Promise<AgendaResponse> {
    const transformedData = {
      ...req,
      tanggalMulai: new Date(req.tanggalMulai),
      tanggalSelesai: new Date(req.tanggalSelesai),
    };
    const createReq = Validation.validate(
      AgendaValidation.CREATE,
      transformedData
    );
    await BupatiRepository.checkBupati(createReq.bupatiId);
    await LokasiRepository.checkLokasi(createReq.lokasiId);
    await JenisAcaraRepository.checkJenisAcara(createReq.jenisAcaraId);

    const agenda = await AgendaRepository.createAgenda(createReq);

    return toAgendaResponse(agenda);
  }

  static async getAllAgenda(): Promise<Array<AgendaResponse>> {
    const agendas = await AgendaRepository.getAllAgenda();

    return agendas.map((agenda) => toAgendaResponse(agenda));
  }

  static async getAgendaById(id: number): Promise<AgendaResponseJoin> {
    const request = Validation.validate(AgendaValidation.GETID, {id});
    const agenda = await AgendaRepository.getAgendaById(request.id);

    return agenda;
  }

  static async updateAgenda(
    req: UpdateAgendaRequest
  ): Promise<AgendaResponse> {

    const transformedData = {
      ...req,
      tanggalMulai: new Date(req.tanggalMulai),
      tanggalSelesai: new Date(req.tanggalSelesai),
    };
    const request = Validation.validate(AgendaValidation.UPDATE, transformedData);

    await BupatiRepository.checkBupati(request.bupatiId);
    await LokasiRepository.checkLokasi(request.lokasiId);
    await JenisAcaraRepository.checkJenisAcara(request.jenisAcaraId);
    await AgendaRepository.checkIdAgenda(request.id);

    const agendaUpdate = await AgendaRepository.updateAgenda(request);

    return toAgendaResponse(agendaUpdate);
  }

  static async deleteAgenda(req: DeleteAgendaRequest): Promise<AgendaResponse> {
    const deleteReq = Validation.validate(AgendaValidation.DELETE, req);

    await BupatiRepository.checkBupati(deleteReq.bupatiId);
    await LokasiRepository.checkLokasi(deleteReq.lokasiId);
    await JenisAcaraRepository.checkJenisAcara(deleteReq.jenisAcaraId);
    await AgendaRepository.checkIdAgenda(deleteReq.id);

    const deleteAgenda = await AgendaRepository.deleteAgenda(deleteReq.id);

    return toAgendaResponse(deleteAgenda);
  }
}

export default AgendaService;
