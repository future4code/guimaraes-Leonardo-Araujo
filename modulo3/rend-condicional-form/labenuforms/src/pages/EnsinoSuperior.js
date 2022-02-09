import React from "react";


export default class EnsinoSuperior extends React.Component{
    render(){
        return(
            <>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                
                   <label>5. Qual curso?</label> 
                   <input type="text"/>
                   <label>6. Qual a unidade de ensino?</label> 
                   <input type="text"/>
                   
                    <button>Proxima etapa</button>
            </>
        )
    }
}