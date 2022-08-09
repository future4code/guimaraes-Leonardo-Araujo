
import { FriendshipsInputDTO } from "../model/FriendshipsInputDTO";
import { BaseDatabase } from "./BaseDataBase";

export class FriendshipsDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_friendships";

  async create(input:FriendshipsInputDTO): Promise<void> {
 
    await FriendshipsDatabase.connection
      .insert({id:input.id,user_id1:input.userId,user_id2:input.friendId})
      .into(FriendshipsDatabase.TABLE_NAME);
  }
  
}
