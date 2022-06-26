import app from './app'
import connection from './connection'
import { Request, Response } from "express"
import { v4 as generateId } from 'uuid'
import { createUser, editUser, getUserId } from './function';
import { newUser } from './types';

let errorCode = 500
app.post("/user", async (req: Request, res: Response) => {
	const { name, nickname, email } = req.body
	const authorization = req.headers.authorization
	try {

		if (!authorization) {
			errorCode = 401
			throw new Error("Usuario não autorizado")
		}
		if (!name.trim() || !nickname.trim() || !email.trim()) {
			errorCode = 400
			throw new Error("Solicitação Inválida")

		}
		const newUser: newUser = {
			id: generateId(),
			name,
			nickname,
			email
		}

		if (await createUser(newUser)) {
			res.send("Usuario criado com sucesso!")

		} else {
			throw new Error("Unexpected error")
		}

	} catch (error: any) {

		res.status(errorCode).send(error.message)
	}

})

app.get("/user/:id", async (req: Request, res: Response) => {
	const authorization = req.headers.authorization
	const { id } = req.params

	try {
		if (!authorization) {
			errorCode = 401
			throw new Error("Usuario não autorizado")
		}
		if (req.params.id.trim() === ":id" || !req.params.id.trim()) {
			errorCode = 400
			throw new Error("Solicitação Inválida")
		}
		const result = await getUserId(id)

		if (!result) throw new Error("Usuário não encontrado")
		res.status(200).send(result[0])


	} catch (error: any) {
		res.status(errorCode).send(error.message)
	}
})
app.put("/user/:id", async (req: Request, res: Response) =>{
	const authorization = req.headers.authorization
	const {name,nickname,email}=req.body
	const { id } = req.params
	try {
		if (!authorization) {
			errorCode = 401
			throw new Error("Usuario não autorizado")
		}
		if (req.params.id.trim() === ":id" || !req.params.id.trim()) {
			errorCode = 400
			throw new Error("Solicitação Inválida")
		}
		if(!name&&!nickname&&!email){
			errorCode = 400
			throw new Error("Solicitação Inválida")
		}
		const result=await editUser({id,name,nickname,email})

		if(result){
			res.status(200).send("Usuário atualizado com sucesso !")
		}else{
			throw new Error("Algo deu errado")
		}		


	} catch (error: any) {
		res.status(errorCode).send(error.message)
	}
})