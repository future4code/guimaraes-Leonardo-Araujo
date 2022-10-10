

import { IdGenerator } from "../services/IdGenerator";

import { Authenticator } from "../services/Authenticator";
import { PasseioDatabase } from "../data/passeioDatabase";
import { formatardata, Passeio, PasseioInputDTO } from "../types/passeio";
import { InvalidData, InvalidDuration, InvalidHour, InvalidPasseio, Unauthorized } from "../error/BaseError";
import { UserDatabase } from "../data/UserDatabase";
import { time } from "console";


export class PasseioBusiness {

    async criarPasseio(passeio:Passeio,token:string) {

        try {
           
            if(!token){
                throw new Unauthorized()
            }
            if(!passeio.dataAgendamento||!passeio.duracao|| !passeio.latitude|| !passeio.longitude||passeio.pets.length<1){
                throw new InvalidPasseio()
            }
            let preco =0
            if(passeio.duracao!==30 && passeio.duracao!==60){
                throw new InvalidDuration()
            }
            
            if(passeio.duracao===30 ){
                if(passeio.pets.length>1){
                    
                    preco= 25+(15*(passeio.pets.length-1))
                    
                }else{
                    preco=25
                }

            }else{
                if(passeio.pets.length>1){
                    
                    preco= 35+(20*(passeio.pets.length-1))
                   
                }else{
                    preco=35
                }
            }
            

              const data= formatardata(passeio.dataAgendamento)
              data.setMinutes(data.getMinutes()+passeio.duracao)
              
             const  termino=data.getHours()+":"+data.getMinutes()+""

            

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();
            const authenticator = new Authenticator();
            const idDono=authenticator.getData(token).id
            
            const userDatabase= new UserDatabase()
            const user=userDatabase.getUserById(idDono)
            if(!user){
                throw new Unauthorized()
            }            

            const passeioDatabase=new PasseioDatabase()
            await passeioDatabase.criarPasseio(id, passeio.dataAgendamento, preco,passeio.duracao,passeio.latitude,passeio.longitude,passeio.pets,idDono);

            

            return true;
        } catch (error: any) {
            throw new Error(error.message);
        }


    }
     getAllPasseiosByData= async(data:string,sort:string,order:string,size:number,page:number) :Promise<any>=> {
    try{
        if(!data){
            throw new InvalidData()
        }
        if(sort !=="duracao"&&sort !=="id"&&sort !=="status"&&sort !=="preco"&&sort !=="horario_inicio"){
            sort="status"
        }
        if(order!=="asc" && order!=="desc" ){
            order="asc" 
        }
        if(isNaN(size)||size<1){
            size=15
        }
        if(isNaN(page)||page<1){
            page=1
        }
        let offset= size*(page-1)
        const passeioDatabase= new PasseioDatabase()
        const result= await passeioDatabase.getAllPasseiosByData(data,sort,order,size,page,offset)
        return result

    }catch(error:any){
        throw new Error(error.message);
    }
    
   }
     getAllPasseios= async(sort:string,order:string,size:number,page:number) :Promise<any>=> {
    try{
        
        if(sort !=="duracao"&&sort !=="id"&&sort !=="status"&&sort !=="preco"&&sort !=="horario_inicio"){
            sort="status"
        }
        if(order!=="asc" && order!=="desc" ){
            order="asc" 
        }
        if(isNaN(size)||size<1){
            size=15
        }
        if(isNaN(page)||page<1){
            page=1
        }
        let offset= size*(page-1)
        const passeioDatabase= new PasseioDatabase()
        const result= await passeioDatabase.getAllPasseios(sort,order,size,page,offset)
        return result

    }catch(error:any){
        throw new Error(error.message);
    }
    
   }
   startWalking=async(id:string ,token:string)=>{
    try{
        
        if(!token){
            throw new Unauthorized()
        }
        if(!id|| id===":id"){
            throw new Error("invalido  Id")
        }
        const hora= new Date()
        const time=hora.getHours()+":"+(hora.getMinutes()<10?"0"+hora.getMinutes():hora.getMinutes())
       
        const passeioDatabase=new PasseioDatabase()
        await passeioDatabase.startWalking(id,time)
        

    }catch(error:any){
        throw new Error(error.message);
    }

   }
   stopWalking=async(id:string ,token:string)=>{
    try{
        
        if(!token){
            throw new Unauthorized()
        }
        if(!id|| id===":id"){
            throw new Error("invalido  Id")
        }
        const hora= new Date()
        const time=hora.getHours()+":"+(hora.getMinutes()<10?"0"+hora.getMinutes():hora.getMinutes())
       
        const passeioDatabase=new PasseioDatabase()
        await passeioDatabase.stopWalking(id,time)
        

    }catch(error:any){
        throw new Error(error.message);
    }

   }
   show=async(id:string ,token:string)=>{
    try{
        
        if(!token){
            throw new Unauthorized()
        }
        if(!id|| id===":id"){
            throw new Error("invalido  Id")
        }
        
       
        const passeioDatabase=new PasseioDatabase()
       const result= await passeioDatabase.show(id)
        return result
    }catch(error:any){
        throw new Error(error.message);
    }

   }
    
}