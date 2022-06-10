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
        let nome=req.query.name as String
        
        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error("Por favor insira o authorization !")
        }
        if(nome){
            let user=usersList.filter(u=>u.name.toLowerCase()=== nome.toLowerCase() )
            if(!user.length){
                errorCode=422
                throw new Error("Usuário não encontrado");
                
            }
            res.status(200).send(user)            

        }
        res.status(200).send(usersList)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})
// exercício 02
// a-  passei o parâmetro type pro params por aer um parametro obrigatório
// b- utilizei um enum para limitar os valores aceitos 
app.get("/users/:type", (req: Request, res: Response) => {
    const type=req.params.type.trim()
    
    try {
        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error("Por favor insira o authorization !")
        }
        if(!type || typeof(type)!=="string"|| type===":type"){
            errorCode=422
            throw new Error("requisição com parâmetros inválidos ou inexistentes !")

        }
        const userPerType=usersList.filter(user=>user.type.toLocaleLowerCase()===type.toLocaleLowerCase())
        if(!userPerType.length){
            errorCode=422
            throw new Error("requisição com parâmetros inválidos ou inexistentes !");
            
        }
        res.status(200).send(userPerType)

    } catch (error: any) {
        res.status(errorCode).end(error.message)
    }

})





app.listen(3003, () => {
    console.log("Servidor de pé na porta 3003")
})