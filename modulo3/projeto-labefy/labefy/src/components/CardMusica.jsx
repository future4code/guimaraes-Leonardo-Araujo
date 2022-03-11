import React from "react";
import styled from "styled-components";



const Container=styled.main`
border: 3px solid green;
 display: flex;
flex-direction: column;
 
 background-color: #dd43b7;
 justify-content: start;
 align-items: center;
 
 img{
     height: 60px;
     
 }
 
`




export default class CardMusica extends React.Component{

    render(){
        return(

            <Container>
                <img src="https://cdn.pixabay.com/photo/2013/07/13/12/38/dices-160005__340.png"/>
                <h2>Lorem ipsum dolor sit.</h2>
                
                
               
               
            </Container>

        );
    }
}