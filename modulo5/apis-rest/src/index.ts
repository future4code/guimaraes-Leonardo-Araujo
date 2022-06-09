import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { users } from './data'
import { v4 as generateId } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())
const usersList = users
let errorCode = 500

// exercicio 01
// a- utilizamos o método GET
// b- entidade : "/users"
app.get("/users", (req: Request, res: Response) => {

    try {
        if (!req.headers.authorization){
            errorCode=401
            throw new Error("Por favor insira o authorization !")
        }
        res.status(200).send(usersList)

    } catch (error: any) {
        res.status(errorCode).end(error.message)
    }

})




app.listen(3003, () => {
    console.log("Servidor de pé na porta 3003")
})