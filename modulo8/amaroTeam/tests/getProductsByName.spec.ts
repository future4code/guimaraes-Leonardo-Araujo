import { ProductBusiness } from "../src/business/ProductBusiness";

describe("Teste na getProductsByName", () => {
    test("Teste na ggetProductsByName com nome vazio", async() => {
      expect.assertions(1)
      try{
        const name=''
        const sort="name"
        const order="desc"
        const page=1
        const size=4
        const productBusiness=new ProductBusiness()
        let offset= size*(page-1)
        await productBusiness.getProductsByname(name,order,size,offset,sort)
        
            
        
       }catch(error:any){
        expect(error.message).toBe(`"Invalid data : `);
        
      }
    });
    
   
  
  
  
  });