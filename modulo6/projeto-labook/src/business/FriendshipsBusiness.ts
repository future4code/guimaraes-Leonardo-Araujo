import { FriendshipsDatabase } from "../data/friendshipsDataBase"
import { InvalidRequest } from "../error/InvalidRequest"
import { FriendshipsInputDTO } from "../model/FriendshipsInputDTO"

export class FriendshipsBusiness {
    async create(input :FriendshipsInputDTO ):Promise<void> {
      try{
        if (!input.userId || !input.friendId ) {
          throw new InvalidRequest()
        }
        
       
    
        const friendshipsDatabase = new FriendshipsDatabase()
        await friendshipsDatabase.create(input)
      }catch(error:any){
          return error.sqlMessage || error.message
      }
    }
  
    
  }