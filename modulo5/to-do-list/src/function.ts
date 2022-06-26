import connection from "./connection"
import { newUser, Task } from "./types"

const formatDate=(date:string[]):any=>{
    const dia=Number(date[0])
    const mes=Number(date[1])
    const ano= Number(date[2])
    if(!dia||!mes||!ano){
        throw new Error("Data incorreta!");
        
    }
    if(dia.toString().length>2|| mes.toString().length>2||ano.toString().length>4 ||dia>31||mes>12) throw new Error("Data incorreta!");
    const newDate= new Date(`${ano}-${mes}-${dia}`)
    return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`


}
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
export const createTask= async (body:Task):Promise<any>=>{
    const {id,title,description,limitDate,creatorUserId}=body
    const date=limitDate.split("/",3)
    
    try {
    const newDate=formatDate(date)
    
    
        const result = await connection("TodoListTask")
            .insert({
                id,
                title,
                description,
                 limit_date:newDate,
                 creator_user_id: creatorUserId
                

            })
        return true

    } catch (error: any) {
        
        return false
    }
}