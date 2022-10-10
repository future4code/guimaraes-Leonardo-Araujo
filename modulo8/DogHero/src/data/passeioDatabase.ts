import { passeioRouter } from "../routes/passeioRouter";
import { IdGenerator } from "../services/IdGenerator";
import { Passeio } from "../types/passeio";
import { BaseDatabase } from "./BaseDatabase";

const idGenerator = new IdGenerator();
export class PasseioDatabase extends BaseDatabase {

    private static TABLE_NAME = "dog_walking";

    public async criarPasseio(
        id: string,
        dataAgendamento: string,
        preco: number,
        duracao: number,
        latitude: number,
        longitude: number,
        pets: string[],
        idDono: string

    ): Promise<void> {

        try {
            await this.getConnection()
                .insert({
                    id,
                    data_agendamento: dataAgendamento,
                    preco,
                    duracao,
                    latitude,
                    longitude
                    

                })
                .into(PasseioDatabase.TABLE_NAME);
            const petsdata = []

            for (let i = 0; i < pets.length; i++) {
                const idPets = idGenerator.generate()
                petsdata.push({
                    id: idPets,
                    name: pets[i],
                    id_dono: idDono,
                    id_walking: id

                })

            }


            await this.getConnection()
                .insert(petsdata)
                .into("pets_walking")
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async getAllPasseiosByData(data:string,sort: string, order: string, size: number, page: number, offset: number): Promise<any> {
        {

            try {
                console.log(data)
                const result = await this.getConnection()
                    .from(PasseioDatabase.TABLE_NAME)
                    .where({data_agendamento:data} )
                    .orderBy(sort, order)
                    .limit(size)
                    .offset(offset)
                
                return result

            } catch (error: any) {
                throw new Error(error.message);
            }
        }

    }
    public async getAllPasseios(sort: string, order: string, size: number, page: number, offset: number): Promise<any> {
        {

            try {
                
                const result = await this.getConnection()
                .select("*")
                    .from(PasseioDatabase.TABLE_NAME)
                                      
                    .orderBy(sort, order)
                    .limit(size)
                    .offset(offset)

                    
                       
                
                
                return result

            } catch (error: any) {
                throw new Error(error.message);
            }
        }

    }

    public async startWalking(id:string,time:string){

        try{    
            console.log(time)
            await this.getConnection()
            .raw(`update ${PasseioDatabase.TABLE_NAME} set horario_inicio = "${time}" where id ="${id}"`)
        }catch(error:any){
            throw new Error(error.message);
        }

    }
    public async stopWalking(id:string,time:string){

        try{    
           
            await this.getConnection()
            .raw(`update ${PasseioDatabase.TABLE_NAME} set horario_termino = "${time}"  where id ="${id}"`)
        }catch(error:any){
            throw new Error(error.message);
        }

    }
    public async show(id:string){
        try{    
           
          const result = await this.getConnection()
            .raw(`Select  TIMEDIFF(horario_termino,horario_inicio)as diferenca_horario from dog_walking where id = "${id}"`)
            return result[0]
        }catch(error:any){
            throw new Error(error.message);
        }
    }
}
