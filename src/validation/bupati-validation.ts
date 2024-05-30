import { ZodType, z } from "zod";

class BupatiValidation {
  static readonly CREATE: ZodType = z.object({
    nama: z
      .string()
      .min(1, "nama minimal harus ada 1 karakter")
      .max(100, "nama maksimal harus ada 100 karakter"),
    periode: z
      .string()
      .min(1, "periode minimal harus ada 1 karakter")
      .max(100, "periode maksimal harus ada 100 karakter"),
  });
}

export default BupatiValidation;
