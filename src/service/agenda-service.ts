import {
  AgendaResponse,
  AgendaResponseJoin,
  CreateAgendaRequest,
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
    id: number,
    req: UpdateAgendaRequest
  ): Promise<AgendaResponse> {
    const request = Validation.validate(AgendaValidation.UPDATE, req);

    await BupatiRepository.checkBupati(request.bupatiId);
    await LokasiRepository.checkLokasi(request.lokasiId);
    await JenisAcaraRepository.checkJenisAcara(request.jenisAcaraId);
    await AgendaRepository.checkIdAgenda(id);

    const agendaUpdate = await AgendaRepository.updateAgenda(id, request);

    return toAgendaResponse(agendaUpdate);
  }
}

export default AgendaService;
