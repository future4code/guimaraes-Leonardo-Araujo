import app from './app'
import connection from './connection'
import { Request, Response } from "express"

class User {
	private id: string;
	private email: string;
	private name: string;
	private password: string;


	constructor(
		id: string,
		email: string,
		name: string,
		password: string
	) {
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
	public interoduceYourself(): string {
		return `Olá, sou ${this.name}. Bom dia!`
	}
}
class Customer extends User {
	public purchaseTotal: number = 0;
	private creditCard: string;

	constructor(
		id: string,
		email: string,
		name: string,
		password: string,
		creditCard: string
	) {
		super(id, email, name, password);
		console.log("Chamando o construtor da classe Customer");
		this.creditCard = creditCard;
	}

	public getCreditCard(): string {
		return this.creditCard;
	}

}
export interface Client {
	name: string;
	// Refere-se ao nome do cliente

	registrationNumber: number;
	// Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

	consumedEnergy: number;
	// Refere-se à energia consumida pelo cliente no mês

	calculateBill(): number;
	// Retorna o valor da conta em reais
}

const client: Client = {
	name: "Goli",
	registrationNumber: 1,
	consumedEnergy: 100,

	calculateBill: () => {
		return 2;
	}
}
export abstract class Place {
	constructor(protected cep: string) { }

	public getCep(): string {
		return this.cep;
	}
}
export class Residence extends Place {
	constructor(
		protected residentsQuantity: number,
		// Refere-se ao número de moradores da casa

		cep: string
	) {
		super(cep);
	}
}
export class Industry extends Place {
	constructor(
		protected machinesQuantity: number,
		// Refere-se à quantidade de máquinas do local 

		cep: string
	) {
		super(cep);
	}
}
export class Commerce extends Place {
	constructor(
		protected floorsQuantity: number,
		// Refere-se à quantidade de andares do lugar

		cep: string
	) {
		super(cep);
	}
}
class ResidentialClient extends Residence implements Client {
	constructor(
	  public name: string,
	  public registrationNumber: number,
	  public consumedEnergy: number,
	  private cpf: string,
	  residentsQuantity: number,
	  cep: string
	) {
	  super(residentsQuantity, cep);
	}
  
	public getCpf(): string {
	  return this.cpf;
	}
  
	public calculateBill(): number {
	  return this.consumedEnergy * 0.75;
	}
  }
const userA = new User("1", "ana@gmail.com", "Ana", "sdfs5sd55s")
console.log(userA.getName())
const customUserA = new Customer("oonas5c16", "Carlos@hotmail.com", "Carlos", "11z1vsvvv", "65151116666")
console.log(customUserA.getCreditCard())
console.log(customUserA.getEmail())
console.log(customUserA.getId())
console.log(customUserA.getName())
console.log(customUserA.purchaseTotal)
console.log(customUserA.interoduceYourself())
console.log("Polimorfismo")
console.log(client.calculateBill())
console.log(client.consumedEnergy)
console.log(client.name)
console.log(client.registrationNumber)

const residencia = new Residence(2, "1515155")
const industria = new Industry(65, "61116154")
const comercio = new Commerce(6, "48611844")

residencia.getCep()
industria.getCep()
comercio.getCep()
