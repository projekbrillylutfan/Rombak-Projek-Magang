import { prismaClient } from "../src/application/database"
import bcrypt from "bcrypt"

class UserTest {
    static async delete() {
        await prismaClient.user.deleteMany({
            where: {
                username: "test"
            }
        })
    }

    static async create() {
        await prismaClient.user.create({
            data: {
                nama: "test",
                jabatan: "test",
                username: "test",
                password: await bcrypt.hash("test", 10),
            }
        })
    }
}

export default UserTest