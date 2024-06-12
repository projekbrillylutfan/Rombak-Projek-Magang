import { Lokasi } from "@prisma/client";
import { LokasiResponse } from "../dto/lokasi-dto";

export function toLokasiResponse(lokasi: Lokasi): LokasiResponse {
  return {
    id: lokasi.id,
    nama_lokasi: lokasi.nama_lokasi,
    alamat: lokasi.alamat,
  };
}
