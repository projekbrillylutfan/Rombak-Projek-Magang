import { Waktu } from "@prisma/client";
import { WaktuResponse } from "../dto/waktu-dto";

export function toWaktuResponse(waktu: Waktu): WaktuResponse {
    return {
        id: waktu.id,
        agendaId: waktu.agendaId,
        tanggal: waktu.tanggal,
        jamMulai: waktu.jamMulai,
        jamSelesai: waktu.jamSelesai
    }
}