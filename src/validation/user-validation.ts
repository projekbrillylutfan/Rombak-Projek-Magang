import { ZodType, z } from "zod";

class UserValidation {
    static readonly REGISTER: ZodType = z.object({
        nama: z.string().min(1).max(100),
        jabatan: z.string().min(1).max(100),
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(200),
    })
}

export default UserValidation