import { Bupati } from "@prisma/client";
import { BupatiResponse } from "../dto/bupati-dto";

export function toBupatiResponse(bupati: Bupati): BupatiResponse  {
    return {
        bupati_id: bupati.bupati_id,
        nama: bupati.nama,
        periode: bupati.periode
    }
}