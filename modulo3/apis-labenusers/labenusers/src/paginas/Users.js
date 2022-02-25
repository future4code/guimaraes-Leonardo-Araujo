import  React from 'react';
import styled from "styled-components"
import axios from "axios"

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
const headers = {
    headers: {
      Authorization: "Leonardo-Santos-guimaraes"
    }
  }
  const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
export default class Users extends React.Component{
    
        state = {
            listaUsuario :[],
            pageAtual: "listaUsers",
            idUsuario: "",
            name: ""
          };
          componentDidMount() {
            this.getAllUsers()
        }
        getAllUsers = () => {
            axios.get(url, headers)
                .then(response => {
                    this.setState({
                        listaUsuario: response.data
                    })
                })
                .catch(error => {
                    alert ("Erro ao buscar usuários")
                })
            const usuarios = this.state.listaUsuario.map(usuario => {
                return (
                    <li key={usuario.id}>
                        {usuario.name}
                        {usuario.email}
                        <BotaoApagar onClick={() => this.deleteUser(usuario.id)} >X</BotaoApagar>
                    </li>
                )
            })
            return usuarios
        }
        deleteUser=usuarioId => {
            if (window.confirm("Tem certeza que deseja apagar o usuário?")) {
                console.log(usuarioId)
              axios
                .delete(
                  `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`,
                  headers
                )
                .then(() => {
                  alert("Usuário apagado com sucesso!");
                  this.getAllUsers();
                })
                .catch(e => {
                  alert("ERRO AO APAGAR USUARIO");
                  console.log(e.response)
                });
            }
          };
          
        
    render(){
        return(
            <Container>
             {this.state.pageAtual === "listaUsers" ? (
          <div>
            <ul>
            {this.state.listaUsuario.length === 0 && <div>Carregando...</div>}
            {this.getAllUsers()}
            </ul>
            
          </div>
        ) : (
          ''
        )}
            </Container>
        )
    }
}
