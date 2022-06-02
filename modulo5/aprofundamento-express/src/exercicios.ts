import express, { Request, Response } from "express";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
// exercício 2
type Afazer={
  userId:number,
  id:number,
  title:string,
  completed:boolean
}
// exercício 3
const afazeres:Afazer[]=[]







const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});