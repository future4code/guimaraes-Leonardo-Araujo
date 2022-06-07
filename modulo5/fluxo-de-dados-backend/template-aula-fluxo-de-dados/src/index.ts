import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { users } from './data'
import { v4 as generateId } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())
const errors={
    

}

app.get("/test",( req:Request,res:Response)=>{
    res.status(200).send("sistema on-line !")
})


app.listen(3003, () => {
    console.log("Servidor de pé na porta 3003")
})