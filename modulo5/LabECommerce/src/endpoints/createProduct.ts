import connection from "../data/connection";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'
import { product} from "../data/type";

const createNewProduct = async (body:product): Promise<any> => {
    const { id, name, price, imageUrl } = body
    const result = await connection("labecommerce_products").insert({
        id,
        name,
        price,
        image_url:imageUrl
    })
    return result
}
export const createProduct = async (req: Request, res: Response): Promise<any> => {
    const { name, price, imageUrl } = req.body
    let statusCode = 500
    try {
        if (!name || !price || !imageUrl) {
            statusCode = 400
            throw new Error("Bad Request");
        }
        if (isNaN(price)) {
            statusCode = 400
            throw new Error("Bad Request");
        }
        const body = {
            id: generateId(),
            name,
            price,
            imageUrl
        }
        const result = await createNewProduct(body)
        if (result[0] === 0) res.status(201).send("Product created successfully !")
        res.status(201).send("Produto criado com sucesso!")
    } catch (error: any) {
        res.send(error.message)


    }
}