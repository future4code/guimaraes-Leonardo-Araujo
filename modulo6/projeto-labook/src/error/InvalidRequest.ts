import { CustomError } from "./CustomError";

export class InvalidRequestPost extends CustomError{
    constructor(){
        super(406,'"description", "type" and "authorId" must be provided')
    }
} 