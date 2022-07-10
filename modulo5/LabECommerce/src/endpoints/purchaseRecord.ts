import connection from "../data/connection";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'
import { purchase } from "../data/type";

const createPurchaseRecord= async(body:purchase):Promise<any> =>{
    const {id, userId, productId, quantity }=body
    const user =await connection("labecommerce_users").select("id").where({id:userId})
    const product=await connection("labecommerce_products").where({id:productId})
   if(!user[0]||!product[0]){
    throw new Error("Usuário ou porduto inválido !");
    
   }
   const price=await connection("labecommerce_products").select("price").where({id:productId})
   const totalPrice= Number(price[0].price)*quantity
   const result= await connection("labecommerce_purchases").insert(
    {
        id,
        user_id:userId,
        product_id:productId,
        quantity,
        total_price:totalPrice
    }
   )
   return result
    
    
    

    
}

export const purchaseRecord= async (req: Request, res: Response):Promise<any>=>{
   const userId=req.body.user_id
   const productId=req.body.product_id
   const quantity=req.body.quantity
   let statusCode = 500
    try{
        if(!userId|| !productId|| !quantity){
            statusCode = 400
            throw new Error("Bad Request");
        }
        if(typeof(userId)!=="string"||typeof(productId)!=="string"){
            statusCode = 400
            throw new Error("Bad Request: Parâmetros inválidos");
        }
        if(isNaN(Number(quantity))||!(Number.isInteger(Number(quantity)))){
            statusCode = 400
            throw new Error("Bad Request: A quantidade passada precisa ser um número inteiro");
        }

      const body:purchase={
        id: generateId(),
        userId,
        productId,
        quantity

      }
      const result=await createPurchaseRecord(body)
       
    if(result[0]===0) res.status(201).send("registro criado com sucesso!")
        
    }catch(error:any){
        
        res.status(500).send(error.message ||error.sqlMessage)
    }

}