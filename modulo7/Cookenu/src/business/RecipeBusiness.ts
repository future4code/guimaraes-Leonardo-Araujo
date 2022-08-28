import { RecipesDatabase } from "../data/RecipeDataBase";

import { CustomError, InvalidId, Unauthorized } from "../error/customError";
import { Recipe, recipe, RecipeInputDTO } from "../model/Recipes";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const hashManger=new HashManager()
export class RecipeBusiness{


    public create= async(input:RecipeInputDTO,token:string): Promise<void>=>{

        try {
            const {title,description} = input;
      
            if ( !title ||!description  ) {
              throw new CustomError(
                400,
                'Preencha os campos "title"  and "description"'
              );
            }
            if(!token){
                throw new Unauthorized()
              }
            
            
             
      
            const id: string = idGenerator.generateId();
      
       
            const recipe: Recipe = {
              id, 
              title,
              description,
              cratedAt:undefined
            };
           
             const recipeDatabase = new RecipesDatabase();
            await recipeDatabase.create(recipe,token);
      
        
          } catch (error: any) {
            throw new CustomError(400, error.message);
          }



    }
    public getRecipesById = async (token:string,id:string) :Promise<recipe>=>{
        try {
          if(!token){
            throw new Unauthorized()
          }
          if(!id|| id===":id"){
            throw new InvalidId()
          }
          
         
          const recipeDatabase= new RecipesDatabase()
          const result : recipe= await recipeDatabase.getRecipesById(token,id) 
          return result 
        } catch (error: any) {
          throw new Error(error.message);
        }
      }
}