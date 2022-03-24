import React from "react";
import styled from 'styled-components'
import agostinho from '../img/agostinho.jpg'

const Container=styled.footer`
display: flex;
background-image: url('${agostinho}') ;
height: 50vh;
justify-content: center;
align-items: flex-end;
margin: 20px 0;

`
export default ()=>{
    return(
        <Container>
            <h3>Agostinho Carrara,38</h3>
        <p>Humilde, trabalhador e interessado em oportunidades amorosas de longo prazo rs</p>
            
       </Container>
    )
}