import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { products } from './data'
import { v4 as generateId } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())
let productsList = products
const errors = {
    Unauthorized: { status: 401, message: "Por favor enviar headers Authorization !" },
    UnprocessableEntity: { status: 422, message: "parâmetros inválidos ,verifique  e tente novamente!" },
    InternalServerError: { status: 500, message: "Algo deu errado!" },
    NotFound: { status: 404, message: "Produto não encontrado!" },


}

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("sistema on-line !")
})
app.post("/products", (req: Request, res: Response) => {
    const { name, price } = req.body

    try {
        if (!req.headers.auth) throw new Error(errors.Unauthorized.message)
        if (!name || !price) throw new Error(errors.UnprocessableEntity.message)
        if (typeof (name) !== "string") throw new Error(errors.UnprocessableEntity.message)
        if (typeof (price) !== "number" || price <= 0) throw new Error(errors.UnprocessableEntity.message)
        const newProduct = {
            id: generateId(),
            name,
            price
        }
        productsList.push(newProduct)
        res.status(201).send(productsList)

    } catch (error: any) {

        switch (error.message) {
            case errors.Unauthorized.message:
                res.status(errors.Unauthorized.status).send(errors.Unauthorized.message)
                break;
            case errors.UnprocessableEntity.message:
                res.status(errors.UnprocessableEntity.status).send(errors.UnprocessableEntity.message)
                break;
            default:
                res.status(errors.InternalServerError.status).send(errors.InternalServerError.message)

        }
    }
})
app.get("/products", (req: Request, res: Response) => {
    try {
        if (!req.headers.auth) throw new Error(errors.Unauthorized.message)
        res.status(201).send(productsList)

    } catch (error: any) {
        res.status(errors.Unauthorized.status).send(errors.Unauthorized.message)
    }

})
app.put("/products/:id",(req: Request, res: Response)=>{
    try {
        
        if (!req.headers.auth) throw new Error(errors.Unauthorized.message)
        if (!req.body.price) throw new Error(errors.UnprocessableEntity.message)
        if (typeof (req.body.price) !== "number" || req.body.price <= 0) throw new Error(errors.UnprocessableEntity.message)
        const produto=productsList.find((product)=>{
                return product.id===req.params.id
        })
        if(!produto)throw new Error(errors.NotFound.message)
        const index=productsList.indexOf(produto)
        productsList[index].price=req.body.price
         res.status(200).send(productsList)

    } catch (error: any) {
        switch (error.message) {
            case errors.Unauthorized.message:
                res.status(errors.Unauthorized.status).send(errors.Unauthorized.message)
                break;
            case errors.UnprocessableEntity.message:
                res.status(errors.UnprocessableEntity.status).send(errors.UnprocessableEntity.message)
                break;
            case errors.NotFound.message:
                res.status(errors.UnprocessableEntity.status).send(errors.UnprocessableEntity.message)
                break;
            default:
                res.status(errors.InternalServerError.status).send(errors.InternalServerError.message)

        }
    }
})

app.delete("/products/:id",(req: Request, res: Response)=>{
    try {
        
        if (!req.headers.auth) throw new Error(errors.Unauthorized.message)
        
        const produto=productsList.find((product)=>{
                return product.id===req.params.id
        })
        if(!produto)throw new Error(errors.NotFound.message)
        const newArrayProducts=productsList.filter((product)=>{
            return product!==produto
        })
        productsList=newArrayProducts
         res.status(200).send(productsList)

    } catch (error: any) {
        switch (error.message) {
            case errors.Unauthorized.message:
                res.status(errors.Unauthorized.status).send(errors.Unauthorized.message)
                break;
            case errors.UnprocessableEntity.message:
                res.status(errors.UnprocessableEntity.status).send(errors.UnprocessableEntity.message)
                break;
            case errors.NotFound.message:
                res.status(errors.UnprocessableEntity.status).send(errors.UnprocessableEntity.message)
                break;
            default:
                res.status(errors.InternalServerError.status).send(errors.InternalServerError.message)

        }
    }
})
app.listen(3003, () => {
    console.log("Servidor de pé na porta 3003")
})