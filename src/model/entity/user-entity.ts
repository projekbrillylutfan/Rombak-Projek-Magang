import { User } from "@prisma/client";
import { UserResponse } from "../dto/user-dto";

export function toUserResponse(user: User): UserResponse  {
    return {
        nama: user.nama,
        username: user.username,
        jabatan: user.jabatan
    }
}

export interface Auth {
    akses_token: string
}