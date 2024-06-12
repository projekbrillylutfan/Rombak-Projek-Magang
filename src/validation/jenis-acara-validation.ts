import { ZodType, z } from "zod";

class JenisAcaraValidation {
  static readonly CREATE: ZodType = z.object({
    jenis_acara: z
      .string()
      .min(1, "jenis acara minimal harus ada 1 karakter")
      .max(100, "jenis acara maksimal harus ada 100 karakter"),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z
      .number()
      .min(1, "id minimal harus ada 1 angka")
      .positive("id harus positif"),
    jenis_acara: z
      .string()
      .min(1, "jenis acara minimal harus ada 1 karakter")
      .max(100, "jenis acara maksimal harus ada 100 karakter"),
  })
}

export default JenisAcaraValidation;
