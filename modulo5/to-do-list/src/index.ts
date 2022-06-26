import app from './app'
import connection from './connection'
import { Request, Response } from "express"
import { v4 as generateId } from 'uuid'
import { createUser } from './function';
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
		 
		 if(await createUser(newUser)){
			 res.send("Usuario criado com sucesso!")

		 }else{
			throw new Error("Unexpected error")
		 }

	} catch (error: any) {
		
		res.status(500).send(error.message)
	}

})