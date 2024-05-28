import { NextFunction, Request, Response } from "express";
import { CreateUserRequest, LoginUserRequest } from "../model/dto/user-dto";
import UserService from "../service/user-service";
import { UserRequest } from "../type/user-request";

class UserController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.registerUser(request);
      res.status(200).json({
        status: 200,
        message: "success register user",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const request: LoginUserRequest = req.body as LoginUserRequest;
      const response = await UserService.loginUser(request);

      res.cookie("token", response.akses_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Gunakan secure hanya di production
        maxAge: 24 * 60 * 60 * 1000, // 24 jam
      });

      res.status(200).json({
        status: 200,
        message: "success login",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getUserCurrent(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await UserService.getUserCurrent(req.user!);
      res.status(200).json({
        status: 200,
        message: "succes get current user",
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}

export default UserController;
