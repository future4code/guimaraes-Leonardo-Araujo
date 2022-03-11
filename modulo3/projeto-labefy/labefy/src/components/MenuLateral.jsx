import React from "react";
import styled from "styled-components";
import home from "../img/home.png"
import playlist from "../img/playlist.png"
import newPlaylist from "../img/adicionarPlaylist.png"


const Container=styled.aside`
 display: flex;
 flex-direction: column;
 background-color: #591e4a;
 justify-content: start;
 align-items: center;
 width: 20vw;
 min-width: 200px;
 div{
     display: flex;
     width: 80%;
     color: white;
     padding: 5px;
     background-color: #460736;
     text-transform: uppercase;
     justify-content:start;
     align-items: center;
     margin: 15px;
 }
 img{
     height: 40px;
     margin: 0 20px;
     border-radius: 10px;
     background-color: bisque;
     cursor: pointer;
 }
 div:hover{
    cursor: pointer;
    background-color: #9c1285;
 }
`




export default class MenuLateral extends React.Component{

    render(){
        return(

            <Container>
                <div>
                    <img src={home}alt="home"/>
                    <p>Início</p>
                </div>
                <div>
                    <img src={playlist} alt="playlist"/>
                    <p>Minhas playlists</p>
                </div>
                <div>
                    <img src={newPlaylist} alt="newPlaylist"/>
                    <p>Criar playlist</p>
                </div>
                
               
               
            </Container>

        );
    }
}