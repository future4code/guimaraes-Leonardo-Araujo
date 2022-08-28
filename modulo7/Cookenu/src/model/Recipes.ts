export type recipe={
    id:string,
    title:string,
    description:string,
    cratedAt: Date
}
export interface RecipeInputDTO{
    title:string,
    description:string,
    
}
export interface Recipe{
    id:string
    title:string,
    description:string,
    cratedAt:any
}