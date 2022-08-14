
import { CustomError } from "../error/CustomError";
import { FriendshipsInputDTO } from "../model/FriendshipsInputDTO";
import { BaseDatabase } from "./BaseDataBase";

export class FriendshipsDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_friendships";

  async create(input:FriendshipsInputDTO): Promise<void> {
 
    await FriendshipsDatabase.connection
      .insert({id:input.id,user_id1:input.userId,user_id2:input.friendId})
       .into(FriendshipsDatabase.TABLE_NAME);
  }
  async delete(input:FriendshipsInputDTO): Promise<void> {
    
   try{
    const result =await FriendshipsDatabase.connection(FriendshipsDatabase.TABLE_NAME).delete().where({
      user_id1:input.userId,
      user_id2:input.friendId
    })  
    
   if(result===0){
    throw new CustomError(400,"id não encontrado")
   }
   }catch(error:any){
    
    throw new Error(error.message || error.sqlMessage)
   }
   
  }
  async getAllposts(id:string): Promise<any> {
    
    try{
     const result= await FriendshipsDatabase.connection("labook_posts").where({
      author_id:id
     }).orderBy("created_at","desc")
    
     
    return result
    }catch(error:any){
     
     throw new Error(error.message || error.sqlMessage)
    }
    
   }
}
