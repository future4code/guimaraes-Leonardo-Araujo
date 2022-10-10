import { Request, Response } from "express";
import { PasseioBusiness } from "../business/passeiBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { Passeio } from "../types/passeio";




export class PasseioController {
    async criarPasseio(req: Request, res: Response) {
        try {
           const token= req.headers.authorization as string
            const passeio: Passeio = {
                dataAgendamento: req.body.data_agendamento,
                duracao: req.body.duracao,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                pets: req.body.pets,
               

            }
            
            

            const passeioBusiness = new PasseioBusiness();
            const result = await passeioBusiness.criarPasseio(passeio,token);
            if (result) {

                res.status(200).send({ Message: "Passeio criado com sucesso  !" });
            }

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

   async  getAllPasseiosByData(req: Request, res: Response){
    try{
        let data= req.query.data as string
        let order= req.query.order as string
        let sort=req.query.sort as string
        let size=Number(req.query.size )
        let page=Number(req.query.page) 

        const passeioBusiness=new PasseioBusiness()
      
        const result= await passeioBusiness.getAllPasseiosByData(data,sort,order,size,page)
        res.status(200).send(result)
    }catch(error:any){
        res.status(400).send({ error: error.message });
    }
   }
   async  getAllPasseios(req: Request, res: Response){
    try{
        
        let order= req.query.order as string
        let sort=req.query.sort as string
        let size=Number(req.query.size )
        let page=Number(req.query.page) 

        const passeioBusiness=new PasseioBusiness()
      
        const result= await passeioBusiness.getAllPasseios(sort,order,size,page)
        res.status(200).send(result)
    }catch(error:any){
        res.status(400).send({ error: error.message });
    }
   }
   async startWalking(req: Request, res: Response){
    try{
        const token= req.headers.authorization as string

    const id =req.params.id
        
        const passeioBusiness=new PasseioBusiness()
      
         await passeioBusiness.startWalking(id,token)
        res.status(200).send({Message:"Passeio iniciado"})
    }catch(error:any){
        res.status(400).send({ error: error.message });
    }
   }
   async stopWalking(req: Request, res: Response){
    try{
        const token= req.headers.authorization as string

    const id =req.params.id
        
        const passeioBusiness=new PasseioBusiness()
      
         await passeioBusiness.stopWalking(id,token)
        res.status(200).send({Message:"Passeio finalizado"})
    }catch(error:any){
        res.status(400).send({ error: error.message });
    }
   }
   async show(req: Request, res: Response){
    try{
        const token= req.headers.authorization as string

        const id =req.params.id
        
        const passeioBusiness=new PasseioBusiness()
      
        const result= await passeioBusiness.show(id,token)
        res.status(200).send({Message:result})
    }catch(error:any){
        res.status(400).send({ error: error.message });
    }
   }
}