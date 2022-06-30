import { Request, Response } from "express";
import connection from "../data/connection";


export default async function selectAllUsers(order:string,sort:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio order by ${sort} ${order};
    `)
 
    return result[0]
 }
export const getAllUsersOrdenado = async(req: Request,res: Response): Promise<void> =>{
    let statusCode=500
    try {
        let {sort,order}=req.query 
        console.log(sort,order)
        if(!(sort as string).trim()){
            sort="email"            
        }
        if(!(order as string).trim()){
            order="ASC"
        }
        if((order as string).toUpperCase().trim()!=="ASC"&&(order as string).toUpperCase().trim()!=="DESC"){
            order="ASC"
        }

       const users = await selectAllUsers(order as string,sort as string)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No Users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.status(statusCode).send(error.message || error.sqlMessage)
    }
 }