import { ZodType, z } from "zod";

class WaktuValidation {
  static readonly CREATE: ZodType = z.object({
    agendaId: z
      .number()
      .positive()
      .min(1, "agenda id must be a positive number greater than 0"),
    tanggal: z.date(),
    jamMulai: z.date(),
    jamSelesai: z.date(),
  });
}

export default WaktuValidation;
