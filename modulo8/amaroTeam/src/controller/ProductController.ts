import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";




export class ProductController {

    async  getAllProducts(req: Request, res: Response){
        try{
    
            let order= req.query.order as string
            let sort=req.query.sort as string
            let size=Number(req.query.size )
            let page=Number(req.query.page) 
    
            const productBusiness=new ProductBusiness()
    
            const result= await productBusiness.getAllProducts(sort,order,size,page)
            res.status(200).send(result)
        }catch(error:any){
            res.status(400).send({ error: error.message });
        }
       }
    
    
    async  getProductdByName(req: Request, res: Response){
        try{
            let name= req.query.name as string
            let order= req.query.order as string
            let sort=req.query.sort as string
            let size=Number(req.query.size )
            let page=Number(req.query.page) 
    
            const productBusiness=new ProductBusiness()
    
            const result= await productBusiness.getProductsByname(name,order,size,page,sort)
            res.status(200).send(result)
        }catch(error:any){
            res.status(400).send({ error: error.message });
        }
       }
}