export interface PasseioInputDTO {
    dataAgendamento: string,
    preco: number,
    duracao: number,
    latitude: number,
    longitude: number,
    pets: string[],
    inicio: string,
    termino: string
}

export interface Passeio{
    dataAgendamento: string,
    duracao: number,
    latitude: number,
    longitude: number,
    pets: string[],
    
}
export const formatardata=(data:string):Date=>{
    const dt= data.split("/")
    
    
    let novaData= new Date(Number(dt[2]), Number(dt[1])-1, Number(dt[0]));
    
    return novaData

}