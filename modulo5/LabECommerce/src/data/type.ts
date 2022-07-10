export type user={
    id:string,
    name:string,
    email:string,
    password:string
}
export type product={
    id:string,
    name:string,
    price:string,
    imageUrl:string
}
export type purchase={
    id:string,
     userId:string,
     productId:string,
     quantity:number
}