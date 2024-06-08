export interface CreateJenisAcaraRequest {
    jenis_acara: string
}

export interface JenisAcaraResponse {
    id: number
    jenis_acara: string
}

export interface UpdateJenisAcaraRequest {
    id: number
    jenis_acara: string
}