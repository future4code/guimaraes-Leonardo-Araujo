import { CustomError, Unauthorized } from "../error/customError";
import { recipe } from "../model/Recipes";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "./BaseDatabase";
import { UserDatabase } from "./UserDatabase";

const userDatabase=new UserDatabase()
const authenticator = new Authenticator()
export class RecipesDatabase extends BaseDatabase {
 
    
    public create= async(recipe:recipe,token:string) : Promise<void>=>{
        try {
            const data= authenticator.getTokenData(token)
            const userId= data.id
      const user= await userDatabase.findUserById(userId)
      if(!user){
        throw new Unauthorized()
      }
            await RecipesDatabase.connection
              .insert(recipe)
              .into("cookenu_recipe");
          } catch (error: any) {
            throw new CustomError(400, error.message);
          }
    

    }
}