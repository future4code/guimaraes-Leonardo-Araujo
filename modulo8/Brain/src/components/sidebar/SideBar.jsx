import React from "react";
import {Container} from "./styled"
import trevo from "../../assets/trevo.png"



const SideBar=(props)=>{

    return(
        <Container>
           <form>
            <select  onChange={()=> props.onChangeSelect}>
                <option value="">Mega Sena</option>
                <option value="">quina</option>
                <option value="">lotofácil</option>
                <option value="">lotomania</option>
                <option value="">timeMania</option>
                <option value="">dia de Sorte</option>
            </select>
           </form>
           <div id="logo">
            <img src= {trevo}/>
            <h3> {props.lotery && props.lotery.nome.toUpperCase()}</h3>
           </div>
           <div >
            <h5>Concurso</h5>
            <h5>!!!</h5>
           </div>
      
        </Container>
    )
}
export default SideBar;

