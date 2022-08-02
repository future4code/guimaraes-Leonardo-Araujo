import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get("/all", userController.getAll)

userRouter.post("/create", userController.create)

