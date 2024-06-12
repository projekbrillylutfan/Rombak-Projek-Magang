import { JenisAcara } from "@prisma/client";
import { JenisAcaraResponse } from "../dto/jenis-acara-dto";

export function toJenisAcaraResponse(jenisAcara: JenisAcara): JenisAcaraResponse  {
    return {
        id: jenisAcara.id,
        jenis_acara: jenisAcara.jenis_acara
    }
}