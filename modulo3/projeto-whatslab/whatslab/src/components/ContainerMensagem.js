import React  from "react";
import styled from "styled-components";



const Container=styled.div`
    border: 1px solid black;
    border-radius:20px 20px 0 0;
    width: 40vw;
    min-height:98vh;
    height: max-content;
    margin: 10px auto;
    box-shadow: 3px -2px black;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    background-color:#e1f5c4;
   overflow:auto;
`


const ContainerMessage=styled.div`
    background-color: #bfd6c7 ;
    border-radius: 10px;
    width:  max-content;
    margin: 10px ;
    padding:10px;
    display: flex;
    flex-direction:column;
    min-width:60px;
    max-width:38vw;
    span{
        color: red;
        margin-bottom:7px;
        font-weight:bolder;
    }
`
const ContainerInput=styled.div`
    display: flex;
    
`
const InputUsuario=styled.input`
    width:15%;
    height: 30px;
    

`
const InputMensagem=styled.input`
    width:70%;
    height: 30px;
    
`
const ButtonEnviar=styled.a`
    width:15%;
    line-height:30px;
    text-decoration:none;
    background-color: green;
    color :white;
    text-align:center;
    font-weight:bolder;
    box-sizing: border-box;
    padding-top:2px ;

`
class ContainerMensagem extends React.Component{
    state={
        inputNome :'',
        inputMsg :'',
        mesagens:[]
    }

    onChangeNome= (event)=>{
        this.setState({inputNome: event.target.value})
        document.addEventListener("keyup",(event)=>{
            if(event.key==="Enter"){
               return this.onClckBotaõEnviar
               
            }
        })
    }
    onChangeMsg= (event)=>{
        this.setState({inputMsg: event.target.value})
        document.addEventListener("keyup",(e)=>{
           if(e.key==="Enter"){
            this.onClckBotaõEnviar()
           }
        })
        
    }
    
   
    onClckBotaõEnviar=()=>{
        let mensagensEviadas=[...this.state.mesagens]
        
        const novaMsg={nome:this.state.inputNome,texto:this.state.inputMsg}
        mensagensEviadas.push(novaMsg)
        this.setState({mesagens:mensagensEviadas})
        console.log({mensagensEviadas})
        this.setState({inputNome: ''})
        this.setState({inputMsg:''})
        
    }
    render(){
        return(
            
            <Container> 
                
                {this.state.mesagens.map((msg,index)=>{
                    if((msg.msg!=="" && msg.texto!=="")  ){
                        return  <ContainerMessage 
                        style={msg.nome=="eu"?{ alignSelf: "end"}:{ alignSelf: "start"}} key={index}>
            <span>{msg.nome}</span>
            <p>{msg.texto}</p>
            
        </ContainerMessage>
                    }
    })}
                
                <ContainerInput id="inputs">
                    <InputUsuario  id="nome"   placeholder="usuário" value={this.state.inputNome} onChange={this.onChangeNome}/>
                    <InputMensagem placeholder="Mensagem" id="texto" value={this.state.inputMsg}  onChange={this.onChangeMsg}/>
                    <ButtonEnviar href="#inputs" onClick={this.onClckBotaõEnviar}>Enviar</ButtonEnviar>
                </ContainerInput>
            </Container>

        )
    }
}
export default ContainerMensagem;