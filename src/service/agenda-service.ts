import { AgendaResponse, CreateAgendaRequest } from "../model/dto/agenda-dto";
import { toAgendaResponse } from "../model/entity/agenda-entity";
import AgendaRepository from "../repository/agenda-repository";
import BupatiRepository from "../repository/bupati-repository";
import JenisAcaraRepository from "../repository/jenis-acara-repository";
import LokasiRepository from "../repository/lokasi-repository";
import AgendaValidation from "../validation/agenda-validation";
import Validation from "../validation/validation";

class AgendaService {
  static async createAgenda(req: CreateAgendaRequest): Promise<AgendaResponse> {
    const createReq = Validation.validate(AgendaValidation.CREATE, req);
    await BupatiRepository.checkBupati(createReq.bupatiId);
    await LokasiRepository.checkLokasi(createReq.lokasiId);
    await JenisAcaraRepository.checkJenisAcara(createReq.jenisAcaraId);

    const agenda = await AgendaRepository.createAgenda(createReq);

    return toAgendaResponse(agenda);
  }

  static async getAllAgenda(): Promise<Array<AgendaResponse>> {
    const agendas = await AgendaRepository.getAllAgenda()

    return agendas.map((agenda) => toAgendaResponse(agenda))
  }

  static async getAgendaById(id: number): Promise<AgendaResponse> {
      const agenda = await AgendaRepository.getAgendaById(id)

      return toAgendaResponse(agenda)
  }
}

export default AgendaService;
