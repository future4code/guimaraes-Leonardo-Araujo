import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { ProductInputDTO } from "../model/product";
import { InvalidData, InvalidProduct } from "../error/BaseError";
import { ProductDatabase } from "../data/Productdatabase";


export class ProductBusiness {

    

    getAllProducts= async(sort:string,order:string,size:number,page:number) :Promise<any>=> {
        try{
    
            if(sort!=="name"&&sort!=="id" ){
                sort="name"
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
            const productDatabase= new ProductDatabase()
            const result= await productDatabase.getAllProducts(sort,order,size,offset)
            return result
    
        }catch(error:any){
            throw new Error(error.message);
        }
    
       }
    getProductsByname= async(name:string,order:string,size:number,page:number,sort:string) :Promise<any>=> {
        try{
            if(!name ){
                throw new InvalidData() 
            }
            if(!sort ){
                sort="name" 
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
            const productDatabase= new ProductDatabase()
            const result= await productDatabase.getProductByName(name,order,size,offset,sort)
            return result
    
        }catch(error:any){
            throw new Error(error.message);
        }
    
       }

}