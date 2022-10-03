
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
    public async getPokemonByName(name:string,token:string){
        try{
            if(!name){
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
      
            if(!user){
                throw new Unauthorized()
            }
            const pokemonDatabase=new PokemonDatabase()
            const result= await pokemonDatabase.getPokemonByName(name)
            return result


        }catch(error:any){
            throw new Error(error.message);
        }

    }

    public async getAllPokemon(title:string,sort:string,order:string,size:number,page:number):Promise<any>{

        try{
            console.log("aqui")
            if(!title){
                title="%"
            }
            if(sort !=="name"&&sort !=="id"&&sort !=="Generation"&&sort !=="Type_1"&&sort !=="Type_2"&&sort !=="ATK"&&sort !=="DEF"&&sort !=="STA "){
                sort="name"
            }
            if(order!=="asc" && order!=="desc" ){
                order="asc" 
            }
            if(isNaN(size)||size<1){
                size=15
            }
            if(isNaN(page)||page<1){
                page=1
            }
            let offset= size*(page-1)
            const pokemonDatabase=new PokemonDatabase()
            const result= await pokemonDatabase.getAllPokemon(title,sort,order,size,page,offset)
            return result

        }catch(error:any){
            throw new Error(error.message);
        }

    }
   

}
