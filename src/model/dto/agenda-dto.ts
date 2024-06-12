export interface AgendaResponse {
  id: number;
  bupatiId: number;
  namaAgenda: string;
  deskripsi: string;
  lokasiId: number;
  jenisAcaraId: number;
  tanggalMulai: Date;
  tanggalSelesai: Date;
}

export interface AgendaResponseJoin {
  id: number;
  namaAgenda: string;
  deskripsi: string;
  tanggalMulai: Date;
  tanggalSelesai: Date;
  bupati: {
    bupati_id: number;
    nama: string;
    periode: string;
  } | null; // Gunakan null jika tidak ada bupati yang terkait
  lokasi: {
    id: number;
    nama_lokasi: string;
    alamat: string;
  } | null; // Gunakan null jika tidak ada lokasi yang terkait
  jenisAcara: {
    id: number;
    jenis_acara: string;
  } | null; // Gunakan null jika tidak ada jenis acara yang terkait
}

export interface CreateAgendaRequest {
  bupatiId: number;
  namaAgenda: string;
  deskripsi: string;
  lokasiId: number;
  jenisAcaraId: number;
  tanggalMulai: Date;
  tanggalSelesai: Date;
}

export interface UpdateAgendaRequest {
  id: number;
  bupatiId: number;
  namaAgenda: string;
  deskripsi: string;
  lokasiId: number;
  jenisAcaraId: number;
  tanggalMulai: Date;
  tanggalSelesai: Date;
}
