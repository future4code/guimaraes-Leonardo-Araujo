import { profile } from "console";
import { CustomError, InvalidId, Unauthorized } from "../error/customError";
import { ProfileOutputDTO, user } from "../model/user";
import { Authenticator } from "../services/Authenticator";

import { BaseDatabase } from "./BaseDatabase";

const authenticator = new Authenticator()
export class UserDatabase extends BaseDatabase {
  public createUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into("cookenu_user");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  public async getUserById({ id }: any): Promise<any> {
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
  public findUserById = async (id: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection("cookenu_user")
        .select()
        .where({ id });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  public getProfile = async (token: string): Promise<ProfileOutputDTO> => {
    try {
      const id = authenticator.getTokenData(token).id as string
      const result = await UserDatabase.connection("cookenu_user").select("id", "name", "email")
        .where({ id })
      
      const profile :ProfileOutputDTO={
        id: result[0].id,
        name:result[0].name,
        email: result[0].email
      }


      return profile
    } catch (error: any) {
      throw new Error(error.message);
    }

  }
  public getProfileById = async (token: string,id:string): Promise<ProfileOutputDTO> => {
    try {
      const data= authenticator.getTokenData(token)
      
      const userId= data.id
      const user= await this.findUserById(userId)
      if(!user){
        throw new Unauthorized()
      }
      
      
      const result = await UserDatabase.connection("cookenu_user").select("id", "name", "email")
        .where({ id})
        
        if(!result[0]){
         throw new InvalidId()
        }
        const profile :ProfileOutputDTO={
          id: result[0].id,
          name:result[0].name,
          email: result[0].email
        }
  
  
        return profile
    } catch (error: any) {
      throw new Error(error.message);
    }

  }
}
