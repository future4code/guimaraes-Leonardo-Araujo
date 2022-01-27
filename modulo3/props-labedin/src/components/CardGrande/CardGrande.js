import React from 'react';
import styled from 'styled-components';


const StyledContainer=styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const StyledImg=styled.img`
     width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const StyledTitulo=styled.h4`
    margin-bottom: 15px;
`
const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
function CardGrande(props) {
    return (
        <StyledContainer className="bigcard-container">
            <StyledImg src={ props.imagem } />
            <StyledDiv>
                <StyledTitulo>{ props.nome }</StyledTitulo>
                <p>{ props.descricao }</p>
            </StyledDiv>
        </StyledContainer>
    )
}

export default CardGrande;