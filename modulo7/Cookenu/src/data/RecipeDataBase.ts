import { CustomError, InvalidId, Unauthorized } from "../error/customError";
import { recipe } from "../model/Recipes";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "./BaseDatabase";
import { UserDatabase } from "./UserDatabase";

const userDatabase = new UserDatabase()
const authenticator = new Authenticator()
export class RecipesDatabase extends BaseDatabase {


    public create = async (recipe: recipe, token: string): Promise<void> => {
        try {
            const data = authenticator.getTokenData(token)
            const userId = data.id
            const user = await userDatabase.findUserById(userId)
            if (!user) {
                throw new Unauthorized()
            }
            await RecipesDatabase.connection
                .insert(recipe)
                .into("cookenu_recipe");
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }


    }
    public getRecipesById = async (token: string, id: string): Promise<recipe> => {
        try {
            const data = authenticator.getTokenData(token)
            const userId = data.id
            const user = await userDatabase.findUserById(userId)
            if (!user) {
                throw new Unauthorized()
            }



            const result = await RecipesDatabase.connection.raw(`SELECT id,title,description, DATE_FORMAT(cratedAt,'%d/%m/%Y') AS cratedAt FROM cookenu_recipe where id = "${id}"`)
            console.log(result)
            if (!result[0]) {
                throw new InvalidId()
            }
            const recipe: recipe = {
                id: result[0][0].id,
                title: result[0][0].title,
                description: result[0][0].description,
                cratedAt:result[0][0].cratedAt
                
            }


            return recipe
        } catch (error: any) {
            throw new Error(error.message);
        }

    }
}