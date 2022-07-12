import app from './app'
import connection from './connection'
import { Request, Response } from "express"

// exercicío 01
// a) O construtor da classe  é o método quer cria uma  instância de uma classe, ou seja,gera um objeto de uma classe, e para chamalo utilizamos a keyword new seguida do  método construtor .

// b) A mensagem aparece sempre que um objeto é instânciado
class Transaction  {
	private description: string
	private value: number
	private date: string
	constructor(
		description: string,
	value: number,
	date: string
	){
		this.description=description
		this.date=date
		this.value=value
	}
	getDescription():string{
		return this.description
	}
	getvalue():number{
		return this.value
	}
	getDate():string{
		return this.date
	}
  }
class UserAccount {
	private cpf: string;
	private name: string;
	private age: number;
	private balance: number = 0;
	private transactions: Transaction[] = [];
  
	constructor(
	   cpf: string,
	   name: string,
	   age: number,
	) {
	   console.log("Chamando o construtor da classe UserAccount")
	   this.cpf = cpf;
	   this.name = name;
	   this.age = age;
	}
	getCpf():string{
		return this.cpf
	}
	getName():string{
		return this.name
	}
	getAge():number{
		return this.age
	}
  
  }
  const novaConta=new UserAccount("12658854","Ana clara",35)
  const novaContaB=new UserAccount("99658854","Julia",25)

  //c) temos acesso a propriedades privadas através do métodos getters e setters

  // exercicío 02

  const novaContaC=new UserAccount("896133","Paulo",22)
  console.log(novaContaC.getName())
  console.log(novaContaB.getName())

  //exercicio 03
