import React from "react";
import styled from "styled-components";
import CardMusica from "./CardMusica";



const Container=styled.main`
 display: grid;
padding: 5px;

 grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
 background-color: #591e4a;
 justify-content: start;
 align-items: center;
 width: 80vw;
 gap: 10px;
 
`




export default class MainMusicas extends React.Component{

    render(){
        return(

            <Container>
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
                <CardMusica />        
               
               
            </Container>

        );
    }
}