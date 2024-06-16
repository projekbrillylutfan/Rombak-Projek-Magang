import { User } from "@prisma/client";
import { prismaClient } from "../application/database";
import { CreateUserRequest, UpdateUserRequest } from "../model/dto/user-dto";

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

  static async checkUser(username: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
        where: {
            username: username
        }
      });
  }

  static async updateUser(user: User, req: UpdateUserRequest): Promise<User> {
    return await prismaClient.user.update({
        where: {
          username: user.username,
        },
        data: req,
      });
  }
}

export default UserRepository;
