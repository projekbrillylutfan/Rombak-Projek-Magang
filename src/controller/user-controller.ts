import { NextFunction, Request, Response } from "express";
import { CreateUserRequest, LoginUserRequest } from "../model/dto/user-dto";
import UserService from "../service/user-service";

class UserController {
    static async registerUser(req: Request, res: Response, next: NextFunction) {
        try {
            const request: CreateUserRequest = req.body as CreateUserRequest
            const response = await UserService.registerUser(request)
            res.status(200).json({
                status: 200,
                message: "success",
                data: response
            })
        } catch (e) {
            next(e)
        }
    }

    static async loginUser(req: Request, res: Response, next: NextFunction) {
        try {
            const request: LoginUserRequest = req.body as LoginUserRequest
            const response = await UserService.loginUser(request)
            res.status(200).json({
                status: 200,
                message: "success",
                data: response
            })
        } catch (e) {
            next(e)
        }
    }
}

export default UserController