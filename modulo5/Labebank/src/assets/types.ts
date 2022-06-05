export type Account = {
    name: string,
    cpf: number,
    birthDate: Date,
    balance: number,
    BankStatement: Transaction[]
}
export type Transaction = {
    value: number,
    date: Date,
    description: string

}