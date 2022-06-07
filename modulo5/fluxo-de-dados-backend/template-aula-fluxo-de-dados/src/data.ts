import { v4 as generateId } from 'uuid'
type Produto = {
   id: string,
   name: string,
   price: string
}
export const products: Produto[] = [
   {
      id: generateId(),
      name: "Notebook",
      price: "3599,99"
   },
   {
      id: generateId(),
      name: "Televisão",
      price: "4899,99"
   },
   {
      id: generateId(),
      name: "monitor",
      price: "1428,99"
   },

];
