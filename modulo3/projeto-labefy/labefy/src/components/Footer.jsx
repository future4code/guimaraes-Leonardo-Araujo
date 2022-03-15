import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png"
import twitter from "../img/twitter.png"
import youtube from "../img/youtube.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
const Container=styled.footer`
 display: flex;
 background-color: #591e4a;
 justify-content: space-around;
 align-items: center;
 p{
     color: white;
 }
 div>a>img{
     height: 10vh;
     border-radius: 50%;
     background-color: bisque;
     margin: 0 20px;
 }
 div>a>img:hover{
    background-color: #9c1285;
    transform: scale(1.3);
    
 }
`
const Logo=styled.img`
    width: 10vw;
    height: 20vh;

`

export default class Footer extends React.Component{

    render(){
        return(

            <Container>
                <Logo src={logo} alt="Labefy"/>
                <p>© 2022 Labefy .</p>
                <div>
                    <a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a>
                    <a href="https://www.youtube.com/"><img src={youtube} alt="youtube" /></a>
                    <a href="https://twitter.com/"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/"><img src={instagram} alt="instagram" /></a>

                </div>


            </Container>

        );
    }
}