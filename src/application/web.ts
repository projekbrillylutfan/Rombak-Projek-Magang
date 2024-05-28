import express from "express";
import { publicRouter } from "../view/route/public-api";
import { errorMiddleware } from "../middlware/error-middleware";

export const web = express()
web.use(express.json())
web.use(publicRouter)
web.use(errorMiddleware)