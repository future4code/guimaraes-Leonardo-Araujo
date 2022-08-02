import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController{

     createUser=async (req: Request,res:Response) :Promise<any>=>{
        try{
            const input:any={
                name:req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const userBusiness=new UserBusiness()
            await userBusiness.createUser(input)
            res.status(201).send({message: "Usuário criado !"})

        }catch(error:any){
            throw new Error(error.message);
        }
    }
    getAll= async(req: Request,res:Response):Promise<any>=>{
        try{
            const userBusiness=new UserBusiness()
        const result= await userBusiness.getAll()
        res.status(200).send(result)
        }catch(error:any){
            throw new Error(error.message);
        }

    }
    deleteUser=async(req: Request,res:Response):Promise<any>=>{
        try{
            const id=req.params.id
            const userBusiness=new UserBusiness()
            await userBusiness.deleteUser(id)
            res.status(200).send("Usuário deletado com sucesso !")
           
        }catch(error:any){
            throw new Error(error.message);
        }
    }
}