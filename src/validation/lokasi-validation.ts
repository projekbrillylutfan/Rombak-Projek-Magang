import { ZodType, z } from "zod";

class LokasiValidation {
  static readonly CREATE: ZodType = z.object({
    nama_lokasi: z
      .string()
      .min(1, "lokasi minimal harus ada 1 karakter")
      .max(200, "lokasi maksimal harus ada 100 karakter"),
  });
}

export default LokasiValidation;
