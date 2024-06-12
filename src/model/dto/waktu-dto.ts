export interface WaktuResponse {
    id: number
    agendaId: number
    tanggal: Date
    jamMulai: Date
    jamSelesai: Date
}

export interface GetWaktuRequest {
    id: number
    agendaId: number
}

export interface DeleteWaktuRequest {
    id: number
    agendaId: number
}

export interface CreateWaktuRequest {
    agendaId: number
    tanggal: Date
    jamMulai: Date
    jamSelesai: Date
}

export interface UpdateWaktuRequest {
    id: number
    agendaId: number
    tanggal: Date
    jamMulai: Date
    jamSelesai: Date
}

export interface WaktuResponseJoin {
    id: number
    tanggal: Date
    jamMulai: Date
    jamSelesai: Date
    agenda: {
        id: number
        namaAgenda: string
        deskripsi: string
    }
}