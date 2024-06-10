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
    tanggalSelesai: agenda.tanggalSelesai,
  };
}

// export function toAgendaResponseJoin(agenda: Agenda): AgendaResponseJoin {
//   return {
//     id: agenda.id,
//     namaAgenda: agenda.namaAgenda,
//     deskripsi: agenda.deskripsi,
//     tanggalMulai: agenda.tanggalMulai,
//     tanggalSelesai: agenda.tanggalSelesai,
//     bupati: {
//       id: agenda.bupatiId,
//       nama: agenda.bupati.nama,
//       periode: agenda.bupati.periode,
//     },
//     lokasi: {
//       id: agenda.lokasi.id,
//       namaLokasi: agenda.lokasi.namaLokasi,
//       alamat: agenda.lokasi.alamat,
//     },
//     jenisAcara: {
//       id: agenda.jenisAcara.id,
//       namaJenisAcara: agenda.jenisAcara.namaJenisAcara,
//     },
//   };
// }
