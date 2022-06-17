import { Account } from "../assets/types"
import { users } from '../assets/data'
export function calcularIdade(nascimento: string):number {
    const d = new Date
    const anoAtual = d.getFullYear()
    const mesAtual = d.getMonth() + 1
    const diaAtual = d.getDate()
    const split = nascimento.split('/')
    const novadata = split[1] + "/" + split[0] + "/" + split[2]
    const data_americana = new Date(novadata)
    const ano_aniversario = data_americana.getFullYear()
    const mes_aniversario = data_americana.getMonth() + 1
    const dia_aniversario = data_americana.getDate()
    var idade: number = Number(anoAtual - ano_aniversario);
    if (mesAtual < mes_aniversario || mesAtual == mes_aniversario && diaAtual < dia_aniversario) {
        idade--;
    }
    return idade;
}
export function verificarCpf(cpf:number,users:Account[]):boolean{
        let result=false    
        for(let user of users){
          
             result=(user.cpf===cpf) 
             if(result){
                 return result
             }

          
        }
        
        return result
}


