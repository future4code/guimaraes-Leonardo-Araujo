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
let afazeres: Afazer[] = [{
  userId: generateId(),
  id: generateId(),
  title: "Lavar as louças",
  completed: true
}, {
  userId: generateId(),
  id: generateId(),
  title: "Limpar o fogão",
  completed: false
}, {
  userId: generateId(),
  id: generateId(),
  title: "Retirar o lixo.",
  completed: false
}]

// exercício 4
app.get("/todos", (req: Request, res: Response) => {
  const tarefasPendentes = afazeres.filter((afazer) => {
    return !afazer.completed

  })
  res.status(200).send(tarefasPendentes)
})
// exercício 5
app.post("/todos", (req: Request, res: Response) => {

  try {
    const authorization = req.headers.authorization
    if (!authorization) throw new Error("Usuário não encontrado");
    if (!req.body.title) throw new Error("informe  a tarefa !");
    const newTarefa: Afazer = { userId: generateId(), id: generateId(), title: req.body.title, completed: req.body.completed }
    afazeres.push(newTarefa)

    res.status(201).send(afazeres)



  } catch (error: any) {
    res.end(error.message)
  }

})
app.put("/todos/:id", (req: Request, res: Response) => {

  try {
    const authorization = req.headers.authorization
    if (!authorization) throw new Error("Usuário não encontrado");
    if (!req.params.id) throw new Error("insira o ID da tarefa");
    const index = afazeres.findIndex((tarefa) => tarefa.id === req.params.id)
    afazeres[index].completed = !afazeres[index].completed
    res.status(200).send(`status da tarefa ${afazeres[index].title} atualizado`)



  } catch (error: any) {
    res.end(error.message)
  }

})
app.delete("/todos/:id", (req: Request, res: Response) => {
  try {
    const authorization = req.headers.authorization
    if (!authorization) throw new Error("Usuário não encontrado");
    if (!req.params.id) throw new Error("insira o ID da tarefa");
    const index = afazeres.findIndex((tarefa) => tarefa.id === req.params.id)
    afazeres.splice(index, 1)
    res.status(200).send(`tarefa  deletada com sucesso !`)
    
   
    



  } catch (error: any) {
    res.end(error.message)
  }
})




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});