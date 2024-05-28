export interface CreateUserRequest {
    nama: string
    jabatan: string
    username: string
    password: string
}

export interface UserResponse {
    username: string
    nama: string
    token?: string
}

export type LoginUserRequest = {
    username: string
    password: string
}