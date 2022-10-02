
import { PokemonDatabase } from "../data/PokemonDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { InvalidId, Unauthorized } from "../error/BaseError";
import { Authenticator } from "../services/Authenticator";
import { UserBusiness } from "./UserBusiness";




export class PokemonBusiness {


    public async getPokemonById(id:string,token:string){
        try{
            if(!id){
                throw new InvalidId()
            }
            if(!token){
                throw new Unauthorized()
            }
            const userDatabase=new UserDatabase()
            const authenticator = new Authenticator();
            const userID= authenticator.getData(token).id
            if(!userID){
                throw new Unauthorized()
            }
            const user= userDatabase.getUserById(userID)
            console.log(user)
            if(!user){
                throw new Unauthorized()
            }
            const pokemonDatabase=new PokemonDatabase()
            const result= await pokemonDatabase.getPokemonById(id)
            return result


        }catch(error:any){
            throw new Error(error.message);
        }

    }
   

}
