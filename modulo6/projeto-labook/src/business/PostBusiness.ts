
import { type } from 'os'
import { v4 as generateId } from 'uuid'
import { PostDatabase } from '../data/PostDataBase'
import { InvalidRequest } from '../error/InvalidRequest'
import { InvalidType } from '../error/InvalidType'
import { PostInputDTO } from '../model/PostinputDTO'

export class PostBusiness {
  async create(input :PostInputDTO ):Promise<void> {
    try{
      if (!input.photo || !input.description || !input.type||!input.authorId) {
        throw new InvalidRequest()
      }
      if(input.type!=="normal"&&input.type!=="event"){
        throw new InvalidType
      }
     
  
      const postDatabase = new PostDatabase()
      await postDatabase.create(input)
    }catch(error:any){
        return error.sqlMessage || error.message
    }
  }

  async get( id: string):Promise<any> {
    try{
      if (!id) {
        throw new Error("Dado inválidos (id)")
      }
      const postDatabase=new PostDatabase()
     const result=await postDatabase.get(id)
     return result
      
    }catch(error:any){
        return error.sqlMessage || error.message
    }
  }
}