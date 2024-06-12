import expres from "express";
import UserController from "../../controller/user-controller";

export const publicRouter = expres.Router()

publicRouter.post("/api/users/register", UserController.registerUser)
publicRouter.post("/api/users/login", UserController.loginUser)