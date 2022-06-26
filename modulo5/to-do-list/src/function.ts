import connection from "./connection"
import { newUser } from "./types"
export const createUser = async (body: newUser): Promise<any> => {
    const { id, name, nickname, email } = body
    try {
        const result =await  connection("TodoListUser")
            .insert({
                id,
                name,
                nickname,
                email

            })
            return result 

    } catch (error: any) {
        return false
    }
}