import { UserDatabase } from "../data/UserDatabase"
import { generatedId } from "../service/generatedId"
import { MovieDatabase } from "../data/MovieDataBase"
import { MovieInputDTO } from "../model/MovieInputDTO"
import { InvalidRequest } from "../error/InvalidRequest"

export class MovieBusiness {
  async create(input: MovieInputDTO):Promise<void> {
    const {title,description ,durationInMinutes,yearOfReleased}=input
    
    if (!title || !description || !durationInMinutes || !yearOfReleased) {
      throw new InvalidRequest()
    }

    const id = generatedId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      durationInMinutes,
        yearOfReleased,
    })
  }
  getAll=async():Promise<any>=>{
    try{
      const movieDatabase=new MovieDatabase()
      const result =await movieDatabase.getAll()
      return result
    }catch(error:any){
        throw new Error(error.message|| error.sqlMessage)
    }

  

  }
}
