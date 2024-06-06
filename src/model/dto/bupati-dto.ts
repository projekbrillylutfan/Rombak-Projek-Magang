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
    bupati_id: number;
    nama: string;
    periode: string;
}