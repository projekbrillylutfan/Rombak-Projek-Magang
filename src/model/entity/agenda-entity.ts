import { Agenda } from "@prisma/client";
import { AgendaResponse } from "../dto/agenda-dto";

export function toAgendaResponse(agenda: Agenda): AgendaResponse {
    return {
        id: agenda.id,
        bupatiId: agenda.bupatiId,
        namaAgenda: agenda.namaAgenda,
        deskripsi: agenda.deskripsi,
        lokasiId: agenda.lokasiId,
        jenisAcaraId: agenda.jenisAcaraId,
        tanggalMulai: agenda.tanggalMulai,
        tanggalSelesai: agenda.tanggalSelesai
    }
}