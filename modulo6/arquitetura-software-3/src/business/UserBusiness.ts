import { UserDatabase } from "../data/UserDatabase"
import { InvalidRequest } from "../error/InvalidRequest"

import { UserInputDTO } from "../model/UserInputDTO"
import { generatedId } from "../service/generatedId"

export class UserBusiness {
  async create(input: UserInputDTO):Promise<void> {
    const {email,name,password}=input
    if (!email || !name || !password) {
      throw new InvalidRequest()
    }

    const id = generatedId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }
  getAll=async():Promise<any>=>{
    try{
      const userDatabase=new UserDatabase()
      const result =await userDatabase.getAll()
      return result
    }catch(error:any){
        throw new Error(error.message|| error.sqlMessage)
    }

  

  }
}
