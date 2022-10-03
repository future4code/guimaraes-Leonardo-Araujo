import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { UserController } from "./UserController";




export class PokemonController {

    public async getPokemonById(req: Request, res: Response){

        try{
            const {id}=req.params
            const token =req.headers.authorization as string
            const pokemonBusiness=new PokemonBusiness()
            const result= await pokemonBusiness.getPokemonById(id,token)
           res.status(200).send(result)

        }catch(error:any){
            res.status(400).send({ error: error.message });
        }

    }
    public async getPokemonByName(req: Request, res: Response){

        try{
            const {name}=req.params
            const token =req.headers.authorization as string
            const pokemonBusiness=new PokemonBusiness()
            const result= await pokemonBusiness.getPokemonByName(name,token)
           res.status(200).send(result)

        }catch(error:any){
            res.status(400).send({ error: error.message });
        }

    }
    public async getAllPokemon(req: Request, res: Response):Promise<any>{
      
        try{
            let title= req.query.title as string
            let order= req.query.order as string
            let sort=req.query.sort as string
            let size=Number(req.query.size )
            let page=Number(req.query.page) 
            
            const pokemonBusiness=new PokemonBusiness()
            console.log(title,order,sort,size,page)
            const result= await pokemonBusiness.getAllPokemon(title,sort,order,size,page)
            res.status(200).send(result)
        }catch(error:any){
            res.status(400).send({ error: error.message });
        }

    }

}