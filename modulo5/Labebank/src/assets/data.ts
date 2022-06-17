
import { Account } from "./types"
export const users: Account[] = [
    {
        name: "Ana Santos",
        cpf: 12113212308,
        birthDate: new Date("1990/02/25").toLocaleDateString(),
        balance: 1800.00,
        BankStatement: [{
            value: 200.00,
            date: new Date("2020/10/05").toLocaleDateString(),
            description: "Depósito"
        },
        {
            value: -900.00,
            date: new Date("2020/10/22").toLocaleDateString(),
            description: "Saque"
        }]
    },
    {
        name: "Marcos Oliveira",
        cpf: 36003318503,
        birthDate: new Date("2000/12/03").toLocaleDateString(),
        balance: 4800.00,
        BankStatement: [{
            value: 1200.00,
            date: new Date("2021/11/29").toLocaleDateString(),
            description: "Depósito"
        },
        {
            value: -1900.00,
            date: new Date("2021/12/10").toLocaleDateString(),
            description: "Saque"
        }]
    },
    {
        name: "Maria Souza",
        cpf: 57842126569,
        birthDate: new Date("1997/03/02").toLocaleDateString(),
        balance: 11800.00,
        BankStatement: [{
            value: 2200.00,
            date: new Date("2022/10/15").toLocaleDateString(),
            description: "Depósito"
        },
        {
            value: -9800.00,
            date: new Date("2020/10/22").toLocaleDateString(),
            description: "Saque"
        }]
    },
    {
        name: "Paulo Martins",
        cpf: 62829357507,
        birthDate: new Date("1983/08/01").toLocaleDateString(),
        balance: 3250.00,
        BankStatement: [{
            value: 9660.00,
            date: new Date("2022/04/09").toLocaleDateString(),
            description: "Depósito"
        },
        {
            value: -1000.00,
            date: new Date("2022/04/18").toLocaleDateString(),
            description: "Saque"
        }]
    }
    ]


