import {posts} from './posts'
const express= require("express")     
const cors = require('cors') 
import { Request,Response } from "express"
//exercico 5

type Post={
id:number,
title:string,
body:string,
userId:number
}

// exercicio 6
//  Acho melhor criar o array post separadamento, como o array pode se muito grande dificultaria a leitura do código 
const usersPost:Post[]=posts

//exercício 7
const app= express()
app.use(express.json())
app.use(cors())

app.get('/posts',(req: Request, res: Response)=>{
   if(req.query.id){
    const userPosts=usersPost.filter((user)=>{
        return user.userId===Number(req.query.id)
    })
    res.status(200).send(userPosts)
}else{
 
    try{
        res.status(200).send(usersPost)
 
     }catch(error){
         res.status(400).end("Erro ao buscar posts ")
     }
   }
    
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   })

