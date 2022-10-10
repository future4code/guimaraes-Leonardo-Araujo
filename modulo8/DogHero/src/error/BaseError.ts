export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
  }
  export class InvalidUser extends BaseError{
    constructor(){
      super( `"Invalid User: inform "name", "email","password" and "role"`,400)
  }
  }
  export class InvalidEmail extends BaseError{
    constructor(){
      super( `Inválid E-mail: email must have @`,400)
  }
  }
  export class InvalidUserLogin extends BaseError{
    constructor(){
      super( `"Invalid User: inform  "email"and "password" `,400)
  }
  }
  export class InvalidPasseio extends BaseError{
    constructor(){
      super( `"  Passeio Invalido: informe  " data Agendamento"," duração", "latitude", "longitude","pets"and "horade inicio" `,400)
  }
  }
  export class InvalidDuration extends BaseError{
    constructor(){
      super( `"Duração Invalida : informe  " duração" de 30 min ou 60 min" `,400)
  }
  }
  export class InvalidHour extends BaseError{
    constructor(){
      super( `"Hora Invalida : informe  "inicio como hora " , ex: "18:23" `,400)
  }
  }
 
  export class Unauthorized extends BaseError{
    constructor(){
      super( `"unauthorized user : `,401)
  }
  }
  export class InvalidData extends BaseError{
    constructor(){
      super( `"Data invalida :  ex: 05/02/1820`,401)
  }
  }