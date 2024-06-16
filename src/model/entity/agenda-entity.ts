import { Agenda, Bupati, JenisAcara, Lokasi } from "@prisma/client";
import { AgendaResponse, AgendaResponseJoin } from "../dto/agenda-dto";

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

// let bupati: Bupati
// let lokasi: Lokasi
// let jenisAcara: JenisAcara

// export function toAgendaResponseJoin(agenda: Agenda): AgendaResponseJoin {
//   return {
//     id: agenda.id,
//     namaAgenda: agenda.namaAgenda,
//     deskripsi: agenda.deskripsi,
//     tanggalMulai: agenda.tanggalMulai,
//     tanggalSelesai: agenda.tanggalSelesai,
//     bupati: {
//       bupatiId: agenda.bupatiId,
//       nama:bupati.nama  ,
//       periode: bupati.periode,
//     },
//     lokasi: {
//       lokasiId: agenda.lokasiId,
//       nama_lokasi: lokasi.nama_lokasi,
//       alamat: lokasi.alamat,
//     },
//     jenisAcara: {
//       jenisAcaraId: agenda.jenisAcaraId,
//       jenis_acara: jenisAcara.jenis_acara,
//     },
//   };
// }
