import connection from "../data/connection";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'
import { user } from "../data/type";


export const getAllproducts= async (req: Request, res: Response):Promise<any>=>{
    try{
        const result = await connection("labecommerce_products")
        res.status(200).send(result)
    }catch(error:any){
        res.status(500).send(error.sqlMessage)
    }

}