import { ZodType, z } from "zod";

class LokasiValidation {
  static readonly CREATE: ZodType = z.object({
    nama_lokasi: z
      .string()
      .min(1, "lokasi minimal harus ada 1 karakter")
      .max(200, "lokasi maksimal harus ada 100 karakter"),
    alamat: z
      .string()
      .min(1, "alamat minimal harus ada 1 karakter")
      .max(255, "alamat maksimal harus ada 100 karakter"),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z
      .number()
      .min(1, "id minimal harus ada 1 angka")
      .positive("id harus positif"),
    nama_lokasi: z
      .string()
      .min(1, "lokasi minimal harus ada 1 karakter")
      .max(200, "lokasi maksimal harus ada 100 karakter"),
    alamat: z
      .string()
      .min(1, "alamat minimal harus ada 1 karakter")
      .max(255, "alamat maksimal harus ada 100 karakter"),
  });
}

export default LokasiValidation;
