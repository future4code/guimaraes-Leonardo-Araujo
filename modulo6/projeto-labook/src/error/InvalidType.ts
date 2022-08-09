import { CustomError } from "./CustomError";

export class InvalidType extends CustomError{
    constructor(){
        super(400,'Inválid type : ype must be normal or event')
    }
} 