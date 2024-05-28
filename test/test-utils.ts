import { prismaClient } from "../src/application/database"

class UserTest {
    static async delete() {
        await prismaClient.user.deleteMany({
            where: {
                username: "test"
            }
        })
    }
}

export default UserTest