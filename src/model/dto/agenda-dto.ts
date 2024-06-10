export interface AgendaResponse {
    id: number
    bupatiId: number
    namaAgenda: string
    deskripsi: string
    lokasiId: number
    jenisAcaraId: number
    tanggalMulai: Date
    tanggalSelesai: Date
}

export interface CreateAgendaRequest {
    bupatiId: number
    namaAgenda: string
    deskripsi: string
    lokasiId: number
    jenisAcaraId: number
    tanggalMulai: Date
    tanggalSelesai: Date
}