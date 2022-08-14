import { FriendshipsDatabase } from "../data/friendshipsDataBase"
import { CustomError } from "../error/CustomError"

import { FriendshipsInputDTO } from "../model/FriendshipsInputDTO"

export class FriendshipsBusiness {
    async create(input :FriendshipsInputDTO ):Promise<void> {
      try{
        
        if (!input.userId || !input.friendId ) {
          throw new CustomError(400,"userId and friendId must be provided")
        }
        
       
    
        const friendshipsDatabase = new FriendshipsDatabase()
        await friendshipsDatabase.create(input)
      }catch(error:any){
        throw new Error(error.message || error.sqlMessage)
      }
    }
    async delete(input :FriendshipsInputDTO ):Promise<void> {
      try{
       
        const userid=input.userId
        const friendId=input.friendId
        if (!userid || !friendId) {
          throw new CustomError(400,"userId and friendId must be provided")
        }
        
       
    
        const friendshipsDatabase = new FriendshipsDatabase()
        await friendshipsDatabase.delete(input)
      }catch(error:any){
        throw new Error(error.message || error.sqlMessage)
      }
    }
    async getAllposts(id:string): Promise<any> {
    
      try{
       
        
        const friendshipsDatabase = new FriendshipsDatabase()
        const result=await friendshipsDatabase.getAllposts(id)
        return result
      }catch(error:any){
       
       throw new Error(error.message || error.sqlMessage)
      }
      
     }
  
    
  }