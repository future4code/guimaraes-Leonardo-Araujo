import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { Product, Tags } from "../model/product";
import { productRouter } from "../routes/ProductRoute";
import { IdGenerator } from "../services/IdGenerator";
const idGenerator = new IdGenerator();
export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "AmoroTeam_user";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

      
    return User.toUserModel(result[0]);
  }
  public async getUserById(id: string): Promise<User> {

    
      try{
        const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({id});
        
  
      return User.toUserModel(result[0]);
      }catch(error:any){
        throw new Error(error.message);
      }
    }
    public async fillDatabase(products:Product[],tags:Tags[]):Promise<void>{

      try{
       
        
  
  
                      // await this.getConnection().insert(
                      //   products
                        
                      // ).into("AmoroTeam_products")
                      
                      const tagsData = []
            const tagArray= tags.map((tag)=>{
              return tag.tags
            })
            
            for (let i = 0; i < tags.length; i++) {
                
                for(let j=0 ;j<tagArray[j].length;j++){
                  tagsData.push({
                    tag:tagArray[i][j],
                    product_id:tags[i].id
                  })
                }

            }
         
                     await this.getConnection().insert(tagsData).into("AmoroTeam_tags")
  
  
      }catch(error:any){
          throw new Error(error.message);
      }
  }

}
