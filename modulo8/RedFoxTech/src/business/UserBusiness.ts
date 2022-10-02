import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidData, InvalidEmail, InvalidId, InvalidUser, InvalidUserLogin, Unauthorized } from "../error/BaseError";
import { Pokemon } from "../model/pokemon";

export class UserBusiness {

    async createUser(user: UserInputDTO) {

        try {
            if(!user.email || !user.name|| !user.password){
                throw new InvalidUser();
                
            }
            if(!user.email.includes("@")){
                throw new InvalidEmail()
            }
            if(!user.role){
                user.role="normal"

            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const hashManager = new HashManager();
            const hashPassword = await hashManager.hash(user.password);

            const userDatabase = new UserDatabase();
            await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);

            const authenticator = new Authenticator();
            const accessToken = authenticator.generateToken({ id, role: user.role });

            return accessToken;
        } catch (error: any) {
            throw new Error(error.message);
        }


    }

    async getUserByEmail(user: LoginInputDTO) {

       try{
        if(!user.email || !user.password){
            throw new InvalidUserLogin();            
        }
        if(!user.email.includes("@")){
            throw new InvalidEmail()
        }
        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
       }catch (error: any) {
        throw new Error(error.message);
    }
    }

    public async fillDatabase(input:Pokemon[],token:string):Promise<void>{

        try{
            if(!token){
                throw new Unauthorized()
            }

            if(!input.length){
                throw new InvalidData()
            }
            
            const authenticator = new Authenticator();
             const userRole= authenticator.getData(token).role
             if(!userRole || userRole.toLocaleLowerCase()==="normal"){
                throw new Unauthorized()
              }

            const pokes=  input.map( (pokemon:any)=>{
                        return {name: pokemon.Name,Pokedex_number:pokemon.Pokedex_number,Img_name:pokemon.Img_name,Generation:pokemon.Generation,Evolution_stage:pokemon.Evolution_stage,Evolved:pokemon.Evolved,Family_id:pokemon.Family_id,Cross_gen:pokemon.Cross_gen,Type_1:pokemon.Type_1,Type_2:pokemon.Type_2,Weather_1:pokemon.Weather_1,Weather_2:pokemon.Weather_2,STAT_TOTAL:pokemon.STAT_TOTAL,ATK:pokemon.ATK,DEF:pokemon.DEF,STA:pokemon.STA,Legendary:pokemon.Legendary,Aquireable:pokemon.Aquireable,Spawns:pokemon.Spawns,Regional:pokemon.Regional,Raidable:pokemon.Raidable,Hatchable:pokemon.Hatchable,Shiny:pokemon.Shiny,Nest:pokemon.Nest,New:pokemon.New,Not_Gettable:pokemon.Not_Gettable,Future_Evolve:pokemon.Future_Evolve,CP_40:pokemon.CP_40,CP_39:pokemon.CP_39}
                     })
                        
                     const userDatabase = new UserDatabase();
                     await userDatabase.fillDatabase(pokes)
    
    
        }catch(error:any){
            throw new Error(error.message);
        }
    }
    async getUserById(id:string) :Promise<User>{

        try{
         if(!id){
             throw new InvalidId();            
         }
         
         const userDatabase = new UserDatabase();
         const userFromDB = await userDatabase.getUserById(id);

           return userFromDB
               
 
        
        }catch (error: any) {
         throw new Error(error.message);
     }
     }
}
