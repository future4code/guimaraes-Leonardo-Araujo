

import { PostDatabase } from '../data/PostDataBase'
import { InvalidRequestPost } from '../error/InvalidRequest'


import { InvalidType } from '../error/InvalidType'
import { PostInputDTO } from '../model/PostInputDTO'

export class PostBusiness {
  async create(input :PostInputDTO ):Promise<void> {
    try{
      if (!input.photo || !input.description || !input.type||!input.authorId) {
        throw new InvalidRequestPost
      }
      if(input.type!=="normal"&&input.type!=="event"){
        throw new InvalidType
      }
     
  
      const postDatabase = new PostDatabase()
      await postDatabase.create(input)
    }catch(error:any){
      throw new Error(error.message || error.sqlMessage)
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
      throw new Error(error.message || error.sqlMessage)
    }
  }
}