export type user = {
   id: string
   email: string
   password: string,
   role:string

}

export interface UserInputDTO {

   email: string,
   password: string,
   role :string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export interface LoginInputDTO {
   email: string,
   password: string
} 