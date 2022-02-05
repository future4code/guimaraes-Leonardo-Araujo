import React  from "react";
import styled from "styled-components";


const Container=styled.div`
    border: 1px solid black;
    border-radius:20px 20px 0 0;
    width: 40vw;
    height: 98vh;
    margin: 10px auto;
    box-shadow: 3px -2px black;
    display: flex;
    align-items:end;
    background-color:#e1f5c4;
`
const InputUsuario=styled.input`
    width:15%;
    height: 30px;
    

`
const InputMensagem=styled.input`
    width:70%;
    height: 30px;
`
const ButtonEnviar=styled.button`
    width:15%;
    line-height:30px;
`

class ContainerMensagem extends React.Component{
    render(){
        return(
            <Container> 
                
                <InputUsuario placeholder="usuário"/>
                <InputMensagem placeholder="Mensagem"/>
                <ButtonEnviar>Enviar</ButtonEnviar>
            </Container>

        )
    }
}
export default ContainerMensagem;