import React from "react";


export default class InformacoesCursoSuperior extends React.Component{
    render(){
        return(
            <>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                
                   <label>5. Por que você não terminou um curso de graduação?</label> 
                   <input type="text"/>
                   <label>6. Você fez algum curso complementar?</label> 
                   <input type="text"/>
                   <select name="curso">
                       <option value="Curso técnico">Curso técnico</option>
                       <option value="Curso de inglês">Curso de inglês</option>
                       
                   </select>
                    <button>Proxima etapa</button>
            </>
        )
    }
}