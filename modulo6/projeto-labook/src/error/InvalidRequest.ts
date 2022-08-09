import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError{
    constructor(){
        super(406,'"name", "email" and "password" must be provided')
    }
} 