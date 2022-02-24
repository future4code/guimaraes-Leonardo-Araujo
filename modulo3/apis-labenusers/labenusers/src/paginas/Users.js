import  React from 'react';
import styled from "styled-components"
const Container=styled.div`
border: 1px solid green;
display: flex;
padding: 20px;

input{
    width: 20vw;
    height: 30px;
}

`
const BotaoApagar =styled.button`
    margin-left: 20px;
    color: red;
    border: none;
`

export default class Users extends React.Component{
    
        state = {
            listaUsuarios: [],
            pageAtual: "listaUsers",
            idUsuario: "",
            nome: ""
          };


    render(){
        return(
            <Container>
             {this.state.pageAtual === "listaUsers" ? (
          <div>
            <ul>
              {this.state.listaUsuarios.length === 0 && <div>Carregando...</div>}
              {this.state.listaUsuarios.map(usuario => {
                return (
                  <li>
                    <span >
                      {usuario}
                    </span>
                    <BotaoApagar
                      
                    >
                      X
                    </BotaoApagar>
                  </li>
                );
              })}
            </ul>
            
          </div>
        ) : (
          ''
        )}
            </Container>
        )
    }
}
