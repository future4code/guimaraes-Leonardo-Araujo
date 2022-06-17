export type Account = {
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    BankStatement: Transaction[]
}
export type Transaction = {
    value: number,
    date: string,
    description: string

}
