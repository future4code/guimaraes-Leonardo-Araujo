import express from 'express'
import { MovieController } from '../controller/movieController'


export const movieRouter = express.Router()


const movieController = new MovieController()

movieRouter.get("/all", movieController.getAll)

movieRouter.post("/create", movieController.create)