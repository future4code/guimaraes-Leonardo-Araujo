import { CustomError } from "./CustomError";

export class PostNotfound extends CustomError{
    constructor(){
        super(404,"Post not found")
    }
} 