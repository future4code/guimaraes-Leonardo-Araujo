import connection from "./connection";
import { Request, Response } from "express";
import app from './app'
//  Exercicio 01

//  a)  quando utilizamos o raw recebemos como resultado um array com 2 índices on  o primeiro e o resultado da query e o segundo são informaçoes do banco de dados
// b) 
const searchActorName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

    return result[0];

}
// c)
const countActorsGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT count(gender) FROM Actor WHERE gender = '${gender}'
    `)
    return result[0];

}

// Exercício 02
// a)
const updateSalary = async (id: String, newSalary: number): Promise<any> => {
    try {
        await connection("Actor").update({
            salary: newSalary
        }).where({
            id
        })

    } catch (error: any) {
        return error.message

    }

}
// b)
const deleteActor= async(id:string):Promise<void>=>{
    try{
        await connection("Actor")
        .delete().where({
            id
        })
    }catch(error:any){
        console.error(error)
    }
}
// c)
const  avgSalary= async(gender:string):Promise<any>=>{
    try{
        const result= await connection("Actor")
        .avg("salary as average")
        .where({ gender });
    
      return result[0].average;
    }catch(error:any){
        console.log(error.message)
    }

}
// Exercicio 03
// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await connection("Actor").where({
        id
      })
  
      res.status(200).send(actor)
    } catch (err:any) {
      res.status(400).send(err.message);
    }
  });