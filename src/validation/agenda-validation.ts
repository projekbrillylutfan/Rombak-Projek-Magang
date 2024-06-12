import { ZodType, z } from "zod";

class AgendaValidation {
  static readonly CREATE: ZodType = z.object({
    bupatiId: z.number().positive(),
    namaAgenda: z
      .string()
      .min(1, "agenda minimal harus ada 1 karakter")
      .max(100, "agenda maksimal harus ada 100 karakter"),
    deskripsi: z
      .string()
      .min(1, "deskripsi minimal harus ada 1 karakter")
      .max(255, "deskripsi maksimal harus ada 255 karakter"),
    lokasiId: z.number().positive(),
    jenisAcaraId: z.number().positive(),
    tanggalMulai: z.date(),
    tanggalSelesai: z.date(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    bupatiId: z.number().positive(),
    namaAgenda: z
      .string()
      .min(1, "agenda minimal harus ada 1 karakter")
      .max(100, "agenda maksimal harus ada 100 karakter"),
    deskripsi: z
      .string()
      .min(1, "deskripsi minimal harus ada 1 karakter")
      .max(255, "deskripsi maksimal harus ada 255 karakter"),
    lokasiId: z.number().positive(),
    jenisAcaraId: z.number().positive(),
    tanggalMulai: z.date(),
    tanggalSelesai: z.date(),
  })
}

export default AgendaValidation;
