import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase {

  private static TABLE_NAME = "AmoroTeam_products";

  
  public async getAllProducts(sort: string, order: string, size: number,  offset: number): Promise<any> {
    {

        try {

            const result = await this.getConnection()
            .select("*")
                .from(ProductDatabase.TABLE_NAME)

                .orderBy(sort, order)
                .limit(size)
                .offset(offset)





            return result

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

}
  public async getProductByName( name:string,order: string, size: number, offset: number,sort: string): Promise<any> {
    {

        try {

            const result = await this.getConnection()
            .raw(`Select  *  from AmoroTeam_products where name  like "%${name}%" ORDER BY ${sort} ${order} limit ${size} offset ${offset}`)
                




            return result[0]

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

}

}