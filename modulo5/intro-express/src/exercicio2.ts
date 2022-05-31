const express= require("express")     
const cors = require('cors') 
import { Request,Response } from "express"
//exercicio 2
type User={
id:number,
name:string,
phone:number,
email:string,
website:string,
}

// exercicio 3

const users:User[]=[
    {id:1,
    name:"Ana",
    phone:1199418548,
    email:"ana@gmail.com",
    website:"https://ana.com.br"    
    },
    {id:2,
    name:"Carlos",
    phone:1199418666,
    email:"carlos@gmail.com",
    website:"https://carlos.com.br"    
    },
    {id:3,
    name:"Paulo",
    phone:1199418228,
    email:"Paulo@gmail.com",
    website:"https://paulo.com.br"    
    },
    {id:4,
    name:"Deise",
    phone:1198448548,
    email:"deise@gmail.com",
    website:"https://deise.com.br"    
    },
    {id:5,
    name:"Carol",
    phone:1199418548,
    email:"carol@gmail.com",
    website:"https://carol.com.br"    
    }
]
const app= express()
app.use(express.json())
app.use(cors())

app.get('/users',(req: Request, res: Response)=>{
    try{
        res.status(200).send(users)

    }catch(error){
        res.status(400).end("Erro ao buscar usuários ")
    }
})
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   })