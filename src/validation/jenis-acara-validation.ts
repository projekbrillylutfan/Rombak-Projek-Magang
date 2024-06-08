import { ZodType, z } from "zod";

class JenisAcaraValidation {
  static readonly CREATE: ZodType = z.object({
    jenis_acara: z
      .string()
      .min(1, "jenis_acara minimal harus ada 1 karakter")
      .max(100, "jenis_acara maksimal harus ada 100 karakter"),
  });
}

export default JenisAcaraValidation;
