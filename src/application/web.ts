import express from "express";
import { publicRouter } from "../view/route/public-api";
import { errorMiddleware } from "../middlware/error-middleware";
import { userRouter } from "../view/route/user-api";
import { adminRouter } from "../view/route/admin-api";

export const web = express()
web.use(express.json())
web.use(publicRouter)
web.use(userRouter)
web.use(adminRouter)
web.use(errorMiddleware)