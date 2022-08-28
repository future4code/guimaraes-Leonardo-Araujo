import express from "express";

import { RecipesController } from "./RecipesController";

export const RecipesRouter = express.Router()

const recipescontroller=new RecipesController()

RecipesRouter.post("/",recipescontroller.create)