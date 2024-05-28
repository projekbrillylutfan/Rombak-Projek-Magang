import { User } from "@prisma/client";
import { prismaClient } from "../application/database";
import { CreateUserRequest } from "../model/dto/user-dto";

class UserRepository {
  static async createUser(data: CreateUserRequest): Promise<User> {
    return await prismaClient.user.create({
      data,
    });
  }

  static async totalUserWithSameUsername(username: string): Promise<number> {
    return await prismaClient.user.count({
      where: {
        username: username,
      },
    });
  }
}

export default UserRepository;
