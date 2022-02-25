import  React from 'react';
import styled from "styled-components"
import axios from "axios"

const Container=styled.div`

display: flex;

input{
    width: 20vw;
    height: 30px;
}

`
export default class Page1 extends React.Component{
    state={
        nome:"",
        email:""
    }
    onChangeNome=(event)=>{
        this.setState({ nome: event.target.value})
    }
    onChangeEmail=(event)=>{
        this.setState({ email: event.target.value})
    }
    createUser=()=>{
        const headers = {
            headers: {
              Authorization: "Leonardo-Santos-guimaraes"
            }
          }
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        name: this.state.nome,
        email: this.state.email
      };
        console.log(`nome =  ${body.nome} email=  ${body.email}`)
      axios.post(url,body,headers).then((response)=>{
          

          alert(`Usuário ${this.state.nome} criado com sucesso!`)
               this.setState({ nome: "", email: "" })
      }).catch((error)=>{
        alert("Erro ao criar o usuário");
        console.log(error.response)

      })
    }
    render(){
        return(
            <Container>
                <input placeholder='nome' value={this.state.nome} onChange={this.onChangeNome}/>
                <input placeholder='E-mail' value={this.state.email } onChange={this.onChangeEmail}/>
                <button onClick={this.createUser}>Criar usuário</button>

               
            
            </Container>
        )
    }
}
