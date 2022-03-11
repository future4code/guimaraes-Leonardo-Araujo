import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png"
import login from "../img/usuario.png"

const Container=styled.header`
 display: flex;
 background-color: #591e4a;
 justify-content: space-around;
 align-items: center;

 
    


`
const Login=styled.img`
     height: 5vh;
     border-radius: 50%;
     background-color: bisque;
     cursor: pointer;
     
`
const Pesquisa=styled.input`
border-radius: 15px;
width: 30vw;
height: 32px;
border: none;
font-size: 20px;
padding: 14px;

`
const Logo=styled.img`
    width: 10vw;
    height: 10vh;

`

export default class Header extends React.Component{

    render(){
        return(

            <Container>
                <Logo src={logo} alt="Labefy"/>
               <Pesquisa  placeholder=" Buscar"/>
               <Login src={login} alt="Login"/>
            </Container>

        );
    }
}