import { FriendshipsBusiness } from "../business/FriendshipsBusiness"
import { FriendshipsInputDTO } from "../model/FriendshipsInputDTO"
import { generatedId } from "../service/generateId"
import { Request, Response } from "express";

export class FriendShipsController {
    async create(req: Request, res: Response): Promise<void> {
       try {
          let message = "Success!"
          const {userId,friendId} = req.body
 
          const id = generatedId()
          const input: FriendshipsInputDTO = { id, userId,friendId }
          const friendshipsBusiness = new FriendshipsBusiness()
          await friendshipsBusiness.create(input)
 
 
 
 
          res.status(201).send({ message })
 
       } catch (CustomError: any) {
          let message = CustomError.sqlMessage || CustomError.message
          res.status(CustomError.statusCode || 500).send({ message })
       }
 
    }
 }