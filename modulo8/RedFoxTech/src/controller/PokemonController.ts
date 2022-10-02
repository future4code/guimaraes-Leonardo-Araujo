import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";




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

}