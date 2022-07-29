import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { MovieDatabase } from "../data/MovieDataBase"

export class MovieBusiness {
  async create({ title, description, durationInMinutes,yearOfReleased }: any):Promise<void> {
    
    if (!title || !description || !durationInMinutes || !yearOfReleased) {
      throw new Error("Dados inválidos ")
    }

    const id = generateId()

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
