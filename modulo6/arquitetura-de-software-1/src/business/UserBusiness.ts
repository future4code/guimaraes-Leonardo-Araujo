import { UserDatabase } from "../data/UserDatabase";
import { v4 as uuid } from 'uuid'

export class UserBusiness extends UserDatabase {

    createUser = async (input: any): Promise<any> => {
        try {
            const { name, email, password } = input
            if (!name || !email || !password) {
                throw new Error("Preencha  todos os campos e tente novamente !");

            }
            const id = uuid()
            const userDatabase = new UserDatabase()
            await userDatabase.createUser({
                id,
                name,
                email,
                password
            })

        } catch (error: any) {
            throw new Error( error.message);

        }
    }
    getAll=async():Promise<any> =>{
       try{
        const userDatabase=new UserDatabase()
        const result=await userDatabase.getAll()
        return result
       }catch (error: any) {
        throw new Error( error.message);

    }
    }
    deleteUser=async(id:string):Promise<any> =>{
        try{
            if(!id || id===":id"){
                
            }
            const userDatabase=new UserDatabase()
            await userDatabase.deleteUser(id)

        }catch (error: any) {
        throw new Error( error.message);

    }
    }
}