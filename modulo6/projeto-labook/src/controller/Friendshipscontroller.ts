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
    async delete(req: Request, res: Response): Promise<void> {
       try {
          let message = "Success!"
          const {userId,friendId} = req.body
 
          const id = generatedId()
          const input: FriendshipsInputDTO = { id, userId,friendId }
          const friendshipsBusiness = new FriendshipsBusiness()
          await friendshipsBusiness.delete(input)
 
 
 
 
          res.status(201).send({ message })
 
       } catch (CustomError: any) {
          let message = CustomError.sqlMessage || CustomError.message
          res.status(CustomError.statusCode || 500).send({ message })
          console.log(message)
       }
 
    }
    async getAllposts(req: Request, res: Response): Promise<any> {
    
      try{
         const { id } = req.params
          
          const friendshipsBusiness = new FriendshipsBusiness()
         const result= await friendshipsBusiness.getAllposts(id)
         res.status(200).send(result)
        
      }catch(error:any){
       
       throw new Error(error.message || error.sqlMessage)
      }
      
     }
 }