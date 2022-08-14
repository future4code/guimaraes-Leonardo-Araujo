import { UserDatabase } from "../data/UserDataBase"
import { InvalidRequest } from "../error/InvalidRequestPost"

import { UserInputDTO } from "../model/UserInputDTO"


export class UserBusiness {
  async create(input: UserInputDTO):Promise<void> {
    
    try{
      if (!input.name || !input.email || !input.password) {
     
        throw new InvalidRequest()
    }
    if(typeof(input.name)!=="string" || typeof(input.email)!=="string"||typeof(input.password)!=="string"){
           
       throw new InvalidRequest()
    }
 
   
 
     const userDatabase = new UserDatabase()
     await userDatabase.create(input)
 
    
    }catch(error:any){
       throw new Error(error.message || error.sqlMessage) 
   }

    }
  
}
