const express= require("express")     
const cors = require('cors') 
import { Request,Response } from "express"

const app= express()
app.use(express.json())
app.use(cors())

app.get('/',(req: Request, res: Response)=>{
    res.status(200).send('Hello from Express ,Labenu')
})
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   })