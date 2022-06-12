import express from "express";
import { AddressInfo } from "net";
import cors from 'cors'
import { Request, Response } from "express";
import { users } from './assets/data'
import { calcularIdade, verificarCpf } from "./functions/functions";
import { Account } from "./assets/types"

const app = express()
app.use(express.json())
app.use(cors())

app.post("/signup", (req: Request, res: Response) => {
  try {
    const authorization = req.headers.auth
    if (!authorization) throw new Error("Usuário não autorizado")
    const idade = calcularIdade(req.body.birthDate)
    if (idade < 18) throw new Error("Você não possuí a idade mínima para abrir uma conta")
    const existCpf = verificarCpf(req.body.cpf, users)
    if (existCpf) throw new Error("CPF já cadastrado !")
    const account: Account = ({ ...req.body, balance: 0, BankStatement: [] })
    users.push(account)

    res.status(200).send("Conta criada com sucesso !")
  } catch (error: any) {
    res.status(400).end(error.message)
  }
})
app.get("/users", (req: Request, res: Response) => {
  let errorCode = 500
  const authorization = req.headers.auth
  const { name, cpf } = req.query

  try {
    if (!authorization) throw new Error("Usuário não autorizado")

    if (Object.keys(req.query).length === 0) res.status(200).send(users)
    if (!name || !cpf) {
      errorCode = 422
      throw new Error("Requisição comparametros inválidos !")
    }
    let cpfconvert=Number(cpf)
   
    
    if (typeof (name) !== "string" || !cpfconvert ) {
      errorCode = 422
      throw new Error("Requisição comparametros inválidos, verifique os dados  e trente novamente !")
    }

    const user = users.find(user => (user.name === name && user.cpf=== cpfconvert  ))
    if(!user){
      errorCode=404
      throw new Error("Usuário não encontrado");
      
    }
  
    res.status(200).send(`Olá ${user.name} seu saldo é RS ${user.balance.toFixed(2)}`)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})







const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});