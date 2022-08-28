export type recipe={
    id:string,
    title:string,
    description:string,
    cratedAt: Date
}
export interface RecipeInputDTO{
    title:string,
    description:string
}