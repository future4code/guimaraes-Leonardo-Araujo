import express from "express";
import { PokemonController } from "../controller/PokemonController";



export const pokemonRouter = express.Router();
const pokemonController= new PokemonController();

pokemonRouter.get("/pokeName/:name",pokemonController.getPokemonByName)
pokemonRouter.get("/all",pokemonController.getAllPokemon)
pokemonRouter.get("/:id",pokemonController.getPokemonById)