import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

import { UserInputDTO } from "../model/UserInputDTO";
import { generatedId } from "../service/generateId";

export class UserController {
   async create(req: Request, res: Response): Promise<void> {
      try {
         let message = "Success!"
         const { name, email, password } = req.body

         const id = generatedId()
         const input: UserInputDTO = { id, email, name, password }
         const userBusiness = new UserBusiness()
         await userBusiness.create(input)




         res.status(201).send({ message })

      } catch (CustomError: any) {
         let message = CustomError.sqlMessage || CustomError.message
         res.status(CustomError.statusCode || 500).send({ message })
      }

   }
}