import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/Recipes";
import { Authenticator } from "../services/Authenticator";

export class RecipesController{

    public create= async (req: Request, res: Response) =>{
        try {
            const { title, description } = req.body;
            const token =req.headers.authorization as string
      
            const input:RecipeInputDTO  = {
                title,
                description
              
            };
            const recipesBusiness = new RecipeBusiness()
            await recipesBusiness.create(input,token);
      
            res.status(201).send({ message: "Receita  criado!"});
          } catch (error: any) {
            res.status(400).send(error.message);
          }
    }
}