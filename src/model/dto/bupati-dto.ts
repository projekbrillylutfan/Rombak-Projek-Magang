export interface CreateBupatiRequest {
    nama: string
    periode: string
}

export interface BupatiResponse {
    bupati_id: number
    nama: string
    periode: string
}

export interface UpdateBupatiRequest {
    id: number;
    nama: string;
    periode: string;
}