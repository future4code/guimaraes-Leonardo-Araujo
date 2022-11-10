import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidData, InvalidEmail, InvalidUser, InvalidUserLogin, Unauthorized } from "../error/BaseError";
import { Product } from "../model/product";


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
    public async fillDatabase(input:Product[],token:string):Promise<void>{

        try{
            if(!token){
                throw new Unauthorized()
            }
            

            if(input.length<1){
                throw new InvalidData()
            }

            const authenticator = new Authenticator();
             const userRole= authenticator.getData(token).role
             if(!userRole || userRole.toLocaleLowerCase()==="normal"){
                throw new Unauthorized()
              }
           
             const prods=  input.map( (prod:any)=>{
                return {id:prod.id,name:prod.name}
             })
             const tags=input.map( (prod:any)=>{
                return {id:prod.id,tags:prod.tags}
             })
             

            

                     const userDatabase = new UserDatabase();
                     await userDatabase.fillDatabase(prods,tags)


        }catch(error:any){
            throw new Error(error.message);
        }
    }
}