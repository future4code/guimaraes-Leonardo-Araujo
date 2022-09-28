import { json, Request, Response } from "express";
import { app } from "./app";
import { BaseDatabase } from "./data/BaseDatabase";





const pokemons= require("../PokemonGo02.json")
class bd extends BaseDatabase{



    public create=async()=>{
     const pokes=  pokemons.map( (pokemon:any)=>{
        return {name: pokemon.Name,Pokedex_number:pokemon.Pokedex_number,Img_name:pokemon.Img_name,Generation:pokemon.Generation,Evolution_stage:pokemon.Evolution_stage,Evolved:pokemon.Evolved,Family_id:pokemon.Family_id,Cross_gen:pokemon.Cross_gen,Type_1:pokemon.Type_1,Type_2:pokemon.Type_2,Weather_1:pokemon.Weather_1,Weather_2:pokemon.Weather_2,STAT_TOTAL:pokemon.STAT_TOTAL,ATK:pokemon.ATK,DEF:pokemon.DEF,STA:pokemon.STA,Legendary:pokemon.Legendary,Aquireable:pokemon.Aquireable,Spawns:pokemon.Spawns,Regional:pokemon.Regional,Raidable:pokemon.Raidable,Hatchable:pokemon.Hatchable,Shiny:pokemon.Shiny,Nest:pokemon.Nest,New:pokemon.New,Not_Gettable:pokemon.Not_Gettable,Future_Evolve:pokemon.Future_Evolve,CP_40:pokemon.CP_40,CP_39:pokemon.CP_39}
     })
       
        await this.getConnection().insert(pokes).into("Pokemom_Go")
    }
}

const bD=new bd()

bD.create()