import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';
const app = express();
app.use(express.json());
// exercício 2
type Afazer = {
  userId: string,
  id: string,
  title: string,
  completed: boolean
}
// exercício 3
const afazeres: Afazer[] = [{
  userId: generateId(),
  id: generateId(),
  title: "Lavar as louças",
  completed: true
}, {
  userId: generateId(),
  id: generateId(),
  title: "Limpar o fogão",
  completed: false
},{
  userId: generateId(),
  id: generateId(),
  title: "Retirar o lixo.",
  completed:false
}]

// exercício 4
app.get("/todos",(req:Request, res:Response) => {          
  const tarefasPendentes=afazeres.filter((afazer)=>{
    return !afazer.completed

  })
  res.status(200).send(tarefasPendentes)
})







const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});