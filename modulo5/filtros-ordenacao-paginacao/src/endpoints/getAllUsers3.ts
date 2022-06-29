import { Request, Response } from "express";
import connection from "../data/connection";

export default async function selectAllUsers(offset: number): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio limit 5 offset ${offset};
    `)

    return result[0]
}
export const getAllUsers3 = async (req: Request, res: Response): Promise<void> => {
    try {
        let page = Number(req.query.page)
        if (isNaN(Number(page))) {
            page = 1
        }
        let offset = 5 * (page - 1)

        const users = await selectAllUsers(offset)


        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}