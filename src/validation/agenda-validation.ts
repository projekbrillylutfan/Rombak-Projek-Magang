import { ZodType, z } from "zod";

class AgendaValidation {
  static readonly CREATE: ZodType = z.object({
    bupatiId: z
      .number()
      .positive()
      .min(1, "bupati id must be a positive number greater than 0"),
    namaAgenda: z
      .string()
      .min(1, "agenda minimal harus ada 1 karakter")
      .max(100, "agenda maksimal harus ada 100 karakter"),
    deskripsi: z
      .string()
      .min(1, "deskripsi minimal harus ada 1 karakter")
      .max(255, "deskripsi maksimal harus ada 255 karakter"),
    lokasiId: z
      .number()
      .positive()
      .min(1, "lokasi id must be a positive number greater than 0"),
    jenisAcaraId: z
      .number()
      .positive()
      .min(1, "jenis acara id must be a positive number greater than 0"),
    tanggalMulai: z.date(),
    tanggalSelesai: z.date(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z
      .number()
      .positive()
      .min(1, "id agenda must be a positive number greater than 0"),
    bupatiId: z
      .number()
      .positive()
      .min(1, "bupatiId must be a positive number greater than 0"),
    namaAgenda: z
      .string()
      .min(1, "agenda minimal harus ada 1 karakter")
      .max(100, "agenda maksimal harus ada 100 karakter"),
    deskripsi: z
      .string()
      .min(1, "deskripsi minimal harus ada 1 karakter")
      .max(255, "deskripsi maksimal harus ada 255 karakter"),
    lokasiId: z
      .number()
      .positive()
      .min(1, "lokasi id must be a positive number greater than 0"),
    jenisAcaraId: z
      .number()
      .positive()
      .min(1, "jenis acara id must be a positive number greater than 0"),
    tanggalMulai: z.date(),
    tanggalSelesai: z.date(),
  });

  static readonly DELETE: ZodType = z.object({
    id: z
      .number()
      .positive()
      .min(1, "agenda id must be a positive number greater than 0"),
    bupatiId: z
      .number()
      .positive()
      .min(1, "bupatiId must be a positive number greater than 0"),
    lokasiId: z
      .number()
      .positive()
      .min(1, "lokasi id must be a positive number greater than 0"),
    jenisAcaraId: z
      .number()
      .positive()
      .min(1, "jenis acara id must be a positive number greater than 0"),
  });

  static readonly GETID: ZodType = z.object({
    id: z
      .number()
      .positive()
      .min(1, "agenda id must be a positive number greater than 0"),
  })
}

export default AgendaValidation;
