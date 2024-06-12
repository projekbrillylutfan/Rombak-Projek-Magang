import { User } from "@prisma/client";
import ResponseError from "../error/response-error";
import {
  CreateUserRequest,
  LoginUserRequest,
  UpdateUserRequest,
  UserResponse,
} from "../model/dto/user-dto";
import { Auth, toUserResponse } from "../model/entity/user-entity";
import UserRepository from "../repository/user-repository";
import UserValidation from "../validation/user-validation";
import Validation from "../validation/validation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
  static async registerUser(req: CreateUserRequest): Promise<UserResponse> {
    const registerUser = Validation.validate(UserValidation.REGISTER, req);

    const checkSameUser = await UserRepository.totalUserWithSameUsername(
      registerUser.username
    );

    if (checkSameUser != 0) {
      throw new ResponseError(400, "Username already exists");
    }

    registerUser.password = await bcrypt.hash(registerUser.password, 10);

    const user = await UserRepository.createUser(registerUser);

    return toUserResponse(user);
  }

  static async loginUser(req: LoginUserRequest): Promise<Auth> {
    const loginUser = Validation.validate(UserValidation.LOGIN, req);

    const checkingUser = await UserRepository.checkUser(loginUser.username);

    if (!checkingUser) {
      throw new ResponseError(401, "Username not found");
    }

    const isPassValid = await bcrypt.compare(
      loginUser.password,
      checkingUser.password
    );

    if (!isPassValid) {
      throw new ResponseError(401, "Wrong password");
    }

    const jwtSecret = "RAHASIAMUEHEHEH";
    const jwtExpireTime = "24h";

    const token = jwt.sign(
      {
        username: checkingUser.username,
      },
      jwtSecret,
      {
        expiresIn: jwtExpireTime,
      }
    );

    const authToken: Auth = {
      akses_token: token,
    };

    return authToken;
  }

  static async getUserCurrent(user: User): Promise<UserResponse> {
    return toUserResponse(user);
  }

  static async updateUser(
    user: User,
    req: UpdateUserRequest
  ): Promise<UserResponse> {
    const udpateUserReq = Validation.validate(UserValidation.UPDATE, req);

    udpateUserReq.password = await bcrypt.hash(udpateUserReq.password, 10);

    const result = await UserRepository.updateUser(user, udpateUserReq);

    return toUserResponse(result);
  }
}

export default UserService;
