import { AgendaResponse, AgendaResponseJoin, CreateAgendaRequest } from "../model/dto/agenda-dto";
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
    const createReq = Validation.validate(AgendaValidation.CREATE, transformedData);
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

  static async getAgendaById(id: number): Promise<AgendaResponseJoin> {
      const agenda = await AgendaRepository.getAgendaById(id)

      return agenda
  }
}

export default AgendaService;
