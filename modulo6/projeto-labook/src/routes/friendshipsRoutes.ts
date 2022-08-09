import express from 'express'
import { FriendShipsController } from '../controller/Friendshipscontroller'


export const friendshipsRouter = express.Router()

const friendshipsController = new FriendShipsController()



friendshipsRouter.post("/create", friendshipsController.create)