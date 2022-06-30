import { Request, Response } from "express";
import connection from "../data/connection";

export default async function selectAllUsers(name: String,sort:string,order:string,offset:number): Promise<any> {
    const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio where name like "%${name}%"  order by ${sort} ${order} limit 5 offset ${offset};
  `)

    return result[0]
}
export const getAllUsers4 = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 500
    try {
        let name = req.query.name as string
        let type = req.params.type as string
        let page = Number(req.query.page)
        let {sort,order}=req.query 
        
        if(!(sort as string).trim()){
            sort="name"            
        }
        if(!(order as string).trim()){
            order="DESC"
        }
        if((order as string).toUpperCase().trim()!=="ASC"&&(order as string).toUpperCase().trim()!=="DESC"){
            order="DESC"
        }
        if (isNaN(Number(page))||Number(page)<1) {
            page = 1
        }
        let offset = 5 * (page - 1)
        if (!type || type == ":type" || type === ":type=") {
            type="%"
        }
        if (!name) {
            name = "%"
        }

        const users = await selectAllUsers(name,sort as string,order as string,offset)

        if (!users.length) {
            statusCode = 404
            throw new Error("No Users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.status(statusCode || 400).send(error.message || error.sqlMessage)
    }
}