import { ZodType, z } from "zod";

class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    nama: z
      .string()
      .min(1, "nama minimal harus ada 1 karakter")
      .max(100, "nama maksimal harus ada 100 karakter"),
    jabatan: z
      .string()
      .min(1, "jabatan minimal harus ada 1 karakter")
      .max(100, "jabatan maksimal harus ada 100 karakter"),
    username: z
      .string()
      .min(1, "username minimal harus ada 1 karakter")
      .max(100, "username maksimal harus ada 100 karakter"),
    password: z
      .string()
      .min(1, "password minimal harus ada 1 karakter")
      .max(200, "password maksimal harus ada 200 karakter"),
  });

  static readonly LOGIN: ZodType = z.object({
    username: z
      .string()
      .min(1, "username minimal harus ada 1 karakter")
      .max(100, "username maksimal harus ada 100 karakter"),
    password: z
      .string()
      .min(1, "password minimal harus ada 1 karakter")
      .max(200, "password maksimal harus ada 200 karakter"),
  });
}

export default UserValidation;
