import { title } from "process";
import { BaseDatabase } from "./BaseDatabase";



export class PokemonDatabase extends BaseDatabase {

  private static TABLE_NAME = "Pokemom_Go";

  public async getPokemonById(id:string){
    try{
        const result = await this.getConnection()
      .select("*")
      .from(PokemonDatabase.TABLE_NAME)
      .where({ id });
      return result[0]

    }catch(error:any)
    {
        throw new Error(error.message);
    }
  }
  public async getPokemonByName(name:string){
    try{
        const result = await this.getConnection()
      .select("*")
      .from(PokemonDatabase.TABLE_NAME)
      .where({ name });
      return result[0]

    }catch(error:any)
    {
        throw new Error(error.message);
    }
  }

  public async getAllPokemon(title:string,sort:string,order:string,size:number,page:number,offset:number):Promise<any>{

    try{
        console.log( order)
        const result = await this.getConnection()      
     .from(PokemonDatabase.TABLE_NAME)
      .where("name","LIKE",`%${title}%`)
      .orderBy(sort,order)
      .limit(size)
      .offset(offset)
      console.log(result)
     return result

    }catch(error:any)
    {
        throw new Error(error.message);
    }
  }

}