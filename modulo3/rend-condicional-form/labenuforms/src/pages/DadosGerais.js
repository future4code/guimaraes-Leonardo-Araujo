import React from "react";


export default class DadosGerais extends React.Component{
    render(){
        return(
            <>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                
                   <label>1. Qual o seu nome?</label> 
                   <input type="text"/>
                   <label>2. Qual sua idade?</label> 
                   <input type="text"/>
                   <label>3. Qual seu email?</label> 
                   <input type="text"/>
                   <label>4. Qual a sua escolaridade?</label> 
                   <select name="escolaridade">
                       <option value="Ensino medio incompleto">Ensino medio incompleto</option>
                       <option value="Ensino medio completo">Ensino medio completo</option>
                       <option value="Ensino Superior incompleto">Ensino Superior incompleto</option>
                       <option value="Ensino Superior completo">Ensino Superior completo</option>
                   </select>
                    <button>Proxima etapa</button>
            </>
        )
    }
}