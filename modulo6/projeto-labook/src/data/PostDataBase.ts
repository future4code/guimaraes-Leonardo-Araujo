import { PostInputDTO } from "../model/PostInputDTO";
import { BaseDatabase } from "./BaseDataBase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_posts";

  async create(input:PostInputDTO): Promise<void> {
        await PostDatabase.connection
      .insert({
        id:input.id,
        photo: input.photo,
        description: input.description,
        type: input.type,
        author_id: input.authorId
     })
      .into(PostDatabase.TABLE_NAME);
  }
  async get(id:string): Promise<any> {
     const result=await PostDatabase.connection(PostDatabase.TABLE_NAME).where({id})
     return result
}
  
}