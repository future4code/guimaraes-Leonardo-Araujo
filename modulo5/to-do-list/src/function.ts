import connection from "./connection"
import { newUser } from "./types"
export const createUser = async (body: newUser): Promise<any> => {
    const { id, name, nickname, email } = body
    try {
        const result = await connection("TodoListUser")
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
export const getUserId = async (id: string): Promise<any> => {
    try {
        const result = await connection("TodoListUser")
            .select("id", "nickname")
            .where({
                id
            })
        if (!result[0]) {
            return false

        } else {
            return result

        }

    } catch (error: any) {
        return error.message
    }
}
export const editUser=async(body:newUser):Promise<any>=>{
    const {id,name,nickname,email}=body
    try{
        const result =await connection("TodoListUser")
        .update({
            name,
            nickname,
            email
            
        }).where({
            id
        })
        if(result){
            return true
        }else{
            return false
        }

    }catch(error:any){
        return error.message

    }
}