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
let errorCode = 500

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
  const authorization = req.headers.auth
  const { name, cpf } = req.query

  try {
    if (!authorization) throw new Error("Usuário não autorizado")

    if (Object.keys(req.query).length === 0) res.status(200).send(users)
    if (!name || !cpf) {
      errorCode = 422
      throw new Error("Requisição comparametros inválidos !")
    }
    let cpfConvert = Number(cpf)


    if (typeof (name) !== "string" || !cpfConvert) {
      errorCode = 422
      throw new Error("Requisição comparametros inválidos, verifique os dados  e trente novamente !")
    }

    const user = users.find(user => (user.name === name && user.cpf === cpfConvert))
    if (!user) {
      errorCode = 404
      throw new Error("Usuário não encontrado");

    }

    res.status(200).send(`Olá ${user.name} seu saldo é RS ${user.balance.toFixed(2)}`)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})
app.put("/users", (req: Request, res: Response) => {
  const { cpf, value, bill, date ,description} = req.query
  const authorization = req.headers.auth
  let cpfConvert = Number(cpf)
  const user = users.find(user => user.cpf === cpfConvert)
  try {
    if (!authorization) throw new Error("Usuário não autorizado")
    if (!bill) {

      if (!cpf || !value) {
        errorCode = 422
        throw new Error("Requisição comparametros inválidos, verifique os dados  e trente novamente !")
      }

      const valueConvert = Number(value)
      if (!valueConvert) {
        errorCode = 422
        throw new Error("Requisição comparametros inválidos, verifique os dados  e trente novamente !")
      }

      if (!user) {
        errorCode = 404
        throw new Error("Usuário não encontrado");
      }
      user.balance += valueConvert
      res.status(200).send("Depósito efetuado com sucesso !")
    } else {
      if (bill === '' || !cpf || !description) {
        errorCode = 422
        throw new Error("Requisição comparametros inválidos, verifique os dados  e trente novamente !")
      }
      if (!user) {
        errorCode = 404
        throw new Error("Usuário não encontrado");
      }
      let data: Date
      if (!date) {
        data = new Date()
      } else {

        if ((date as string).length < 10 || (date as string).length > 10) {
          errorCode = 422
          throw new Error("data inválida !")

        } else {
          const [dia, mes, ano] = (date as string).split("/")
          const diaConvertido = Number(dia)
          const mesConvertido = Number(mes)
          const anoConvertido = Number(ano)
          if (!diaConvertido || !mesConvertido || !anoConvertido) {
            errorCode = 422
            throw new Error("data inválida !")
          }

          const diaAtual = new Date().getDate()
          const mesAtual = new Date().getMonth() + 1
          const anoAtual = new Date().getFullYear()
          
         
          if (anoAtual > anoConvertido) {
            errorCode = 422
            throw new Error(" A data não pode ser menor que a data atual")
          }
          if(mesAtual>mesConvertido || mesConvertido>12){
            errorCode = 422
            throw new Error(" A data não pode ser menor que a data atual")
          }
          if(diaAtual>diaConvertido || diaConvertido>31){
            errorCode = 422
            throw new Error(" A data não pode ser menor que a data atual")
          }
          data = new Date(`${ano}-${mes}-${dia}`)

        }
      }
      const saldo=(user.balance- Number(bill))

      if(saldo<0){
        errorCode=400
        throw new Error("Saldo insuficiente para realizar o pagamento!");
        
      }else{
        const descricao=description as string
        user.balance=saldo
        user.BankStatement.push({
          value:+bill,
          date: data.toLocaleDateString(),
          description: descricao
        })
        
      }
      console.log(data)
      console.log(data.toLocaleDateString())
      res.status(200).send("Conta paga com sucesso !")


    }

  } catch (error: any) {
    res.status(errorCode).end(error.message)
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