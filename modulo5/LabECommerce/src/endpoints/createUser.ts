import connection from "../data/connection";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'
import { user } from "../data/type";

const createNewUser =async (body: user): Promise<any> => {
    const {id, name, email, password }=body
  const result= await connection("labecommerce_users").insert({
        id,
        name,
        email,
        password
    })
    return result

}
export const createUser = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body
    let statusCode = 500
    try {
        console.log(typeof(name))
        if (!name || !email || !password) {
            statusCode = 400
            throw new Error("Bad Request");
        }
        
        const body = {
            id: generateId(),
            name,
            email,
            password
        }
        const result = await createNewUser(body)
       if(result[0]===0) res.status(201).send("user created successfully !")
    } catch (error:any) {
        res.send(error.sqlMessage)
    }

}