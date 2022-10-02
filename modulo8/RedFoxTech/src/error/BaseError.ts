export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
  }
  export class InvalidUser extends BaseError{
    constructor(){
      super( `"ID User: inform "name", "email","password" and "role"`,400)
  }
  }
  export class InvalidEmail extends BaseError{
    constructor(){
      super( `Inválid E-mail: email must have @`,400)
  }
  }
  export class InvalidUserLogin extends BaseError{
    constructor(){
      super( `"ID User: inform  "email"and "password" `,400)
  }
  }
  export class InvalidData extends BaseError{
    constructor(){
      super( `"invalid data" `,400)
  }
  }
  export class Unauthorized extends BaseError{
    constructor(){
      super( `"unauthorized user : `,401)
  }
  }
  export class InvalidId extends BaseError{
    constructor(){
      super( `"invalid ID" `,400)
  }
  }