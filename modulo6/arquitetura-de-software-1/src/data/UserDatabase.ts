import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    createUser = async (user: user): Promise<any> => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into("User_Arq")
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    getAll = async (): Promise<any> => {
        try {
            const result = await UserDatabase.connection("User_Arq")
            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    deleteUser = async (id: string): Promise<any> => {
        try {
            await UserDatabase.connection("User_Arq").where({ id }).del()
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}