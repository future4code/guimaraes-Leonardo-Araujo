import express from "express";
import { PasseioController } from "../controller/PasseioController";



export const passeioRouter = express.Router();
const passeioController=new PasseioController()

passeioRouter.post("/criar",passeioController.criarPasseio)
passeioRouter.get("/",passeioController.getAllPasseiosByData)
passeioRouter.get("/all",passeioController.getAllPasseios)
passeioRouter.post("/start/:id",passeioController.startWalking)
passeioRouter.post("/stop/:id",passeioController.stopWalking)
passeioRouter.get("/show/:id",passeioController.show)


