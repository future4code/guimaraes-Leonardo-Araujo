import { v4 as generateId } from 'uuid'
type Produto = {
   id: string,
   name: string,
   price: string
}
export const users: Produto[] = [
   {
      id: generateId(),
      name: "Notebook",
      price: "3599"
   },
   {
      id: generateId(),
      name: "Televisão",
      price: "4899"
   },
   {
      id: generateId(),
      name: "monitor",
      price: "1428"
   },

];
