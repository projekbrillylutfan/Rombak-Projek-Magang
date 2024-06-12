export interface WaktuResponse {
    id: number
    agendaId: number
    tanggal: Date
    jamMulai: Date
    jamSelesai: Date
}

export interface CreateWaktuRequest {
    agendaId: number
    tanggal: Date
    jamMulai: Date
    jamSelesai: Date
}