import React, { useEffect, useState } from "react";
import styled from 'styled-components'


const Container=styled.div`
display: flex;
;
flex-direction: column;

justify-content: flex-end;
align-items: flex-start;
margin: 20px 0;

img{
    width: 400px;
    height: 400px;
    margin: 20px 0px;
    
}
h2{
    font-weight: bolder;
    font-size: 20pt;
    margin: 0 10px;
}
p{
    font-size: 15pt;
    margin: 0 10px;
}

`
export default (props)=>{
    const renderCard=()=>{
        if(props.usuario){
            return(
                <>
                    <img src={props.usuario.photo}/>
                    <h2>{`${props.usuario.name} , ${props.usuario.age}`}</h2>
                    <p>{props.usuario.bio}</p>
                </>
            )
        }
    }


    return(
        <Container>
            {renderCard()}
       </Container>
    )
}