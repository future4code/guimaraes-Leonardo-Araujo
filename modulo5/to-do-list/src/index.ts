import app from './app'
import connection from './connection'
import { Request, Response } from "express"

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("003")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});
