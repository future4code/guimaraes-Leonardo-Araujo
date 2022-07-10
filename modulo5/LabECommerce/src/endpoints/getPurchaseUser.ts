import connection from "../data/connection";
import { Request, Response } from "express";



export const getPurchaseUser = async (req: Request, res: Response): Promise<any> => {
    const userId = req.params.user_id
    let statusCode = 500
    
    try {
        if (!userId || userId === ":user_id") {
            statusCode = 400
            throw new Error("Bad request: Id inválido !")
        }
        const result= await connection("labecommerce_purchases").where({user_id:userId})
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage)
    }

}