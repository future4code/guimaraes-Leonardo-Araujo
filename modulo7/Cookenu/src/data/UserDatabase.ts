import { CustomError } from "../error/customError";
import { user } from "../model/user";

import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public createUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name:  user.name,                   
          email: user.email,
          password: user.password,
          role:user.role
        })
        .into("cookenu_user");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  public async getUserById({id}: any): Promise<any> {
    const result = await UserDatabase.connection("cookenu_user")      
      .where({ id });

    return result;
  }

  public findUser = async (email: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection("cookenu_user")
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  
}
 