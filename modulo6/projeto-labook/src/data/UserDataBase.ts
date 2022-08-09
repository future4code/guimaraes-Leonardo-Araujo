import { UserInputDTO } from "../model/UserInputDTO";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

  async create(input:UserInputDTO): Promise<void> {
    await UserDatabase.connection
      .insert(input)
      .into(UserDatabase.TABLE_NAME);
  }
  
}
