import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostDatabase } from "../data/PostDataBase";
import { PostNotfound } from "../error/PostNotFound";
import { PostInputDTO } from "../model/PostinputDTO";
import { generatedId } from "../service/generateId";

export class PostController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            let message = "Success!"

            const { photo, description, type, authorId } = req.body

            const id = generatedId()
            const input:PostInputDTO={
                id,
                photo,
                description,
                type,
                authorId
            }
            const postBusiness = new PostBusiness()
            await postBusiness.create(input)

            

            res.status(201).send({ message })

        } catch (CustomError: any) {
            let message = CustomError.sqlMessage || CustomError.message
         res.status(CustomError.statusCode || 500).send({ message })
        }

    }
    async get(req: Request, res: Response): Promise<void> {
        try {
            
      
            const { id } = req.params

        const postBusiness=new PostBusiness()
        const result=await postBusiness.get(id)

        if (!result[0]) {
           
            throw new PostNotfound()
         }
      
                 
            res.status(200).send( result )
      
         } catch (CustomError: any) {
            let message = CustomError.sqlMessage || CustomError.message
         res.status(CustomError.statusCode || 500).send({ message })
         }



    }    
}