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

  

}