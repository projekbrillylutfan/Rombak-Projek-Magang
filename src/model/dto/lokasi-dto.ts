export interface CreateLokasiRequest {
  nama_lokasi: string;
  alamat: string;
}

export interface LokasiResponse {
  id: number;
  nama_lokasi: string;
  alamat: string;
}

export interface UpdateLokasiRequest {
  id: number;
  nama_lokasi: string;
  alamat: string;
}
