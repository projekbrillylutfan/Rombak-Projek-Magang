export interface CreateUserRequest {
    nama: string
    jabatan: string
    username: string
    password: string
}

export interface UserResponse {
    username: string
    nama: string
    jabatan?: string
    token?: string
}

export interface LoginUserRequest {
    username: string
    password: string
}

export interface UpdateUserRequest {
    nama: string
    jabatan: string
    username: string
    password: string
}
