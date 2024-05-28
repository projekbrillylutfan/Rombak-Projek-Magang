import ResponseError from "../error/response-error";
import { CreateUserRequest, UserResponse } from "../model/dto/user-dto";
import { toUserResponse } from "../model/entity/user-entity";
import UserRepository from "../repository/user-repository";
import UserValidation from "../validation/user-validation";
import Validation from "../validation/validation";
import bcrypt from "bcrypt";

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
}

export default UserService;
