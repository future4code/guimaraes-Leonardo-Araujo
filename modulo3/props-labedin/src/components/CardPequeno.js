import React from 'react';
import styled from 'styled-components';

const StyledImagens=styled.img`
    height: 40px;
    margin-right: 20px;
`
const StyledLabel=styled.label`
    font-weight:bolder;
     margin-right: 5px;
`
const StyledContainer=styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 510px;
`




function CardPequeno(props){
    return (
        <StyledContainer>
            <StyledImagens src={props.imagem} alt=''/>
            <StyledLabel>{props.label}</StyledLabel>
            <span>{props.texto}</span>


        </StyledContainer>
    )
}
export default CardPequeno;