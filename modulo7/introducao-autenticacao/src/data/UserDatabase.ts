import { CustomError } from "../error/customError";
import { user } from "../model/user";

import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public createUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,                   
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  public async getUserById({id}: any): Promise<any> {
    const result = await UserDatabase.connection("Auth_users")      
      .where({ id });

    return result;
  }
  
  public findUser = async (email: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection("Auth_users")
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  public get=async ():Promise<any>=>{
    console.log(await UserDatabase.connection("Auth_users"))

  }
}
