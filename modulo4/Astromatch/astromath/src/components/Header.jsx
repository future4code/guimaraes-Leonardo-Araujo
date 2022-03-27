import React from "react";
import styled from 'styled-components'
import maches from '../img/maches.png'
import home from '../img/iconehome.png'
const Container=styled.header`
padding: 10px;
text-align: center;
font-size: 30px;
margin-bottom: 20px;
display: flex;
justify-content: space-around;

border-bottom: 1px solid #d1c3c3;
height: 50px;
span{
       
   width: 100%;
    color: #3c0478;
    font-weight: bolder;
    text-align: center;
    line-height: 50px;

      
}
img:hover{
    transform: scale(0.8);
}
img{
    
    height: 50px;
    cursor: pointer;
}
strong{
    color: #1eeb1c;
}
`
export default (props)=>{

    const mudarTela=(tela)=>{
        props.setTela(tela)
       if(tela=="lista"){
        document.getElementById("botao-lista").style.display="none"
        document.getElementById("botao-voltar").style.display="block"
    }else{
           document.getElementById("botao-lista").style.display="block"
           document.getElementById("botao-voltar").style.display="none"

       }
    }
    return(
        <Container id="lista-maches">
            <img id="botao-voltar" style={{float:"left"}} src={home} alt="Maches"  onClick={()=>mudarTela("inicial")}/>
            <span><strong>Astro</strong>mach</span>
            <img id="botao-lista" style={{float:"right"}} src={maches} alt="Maches"  onClick={()=>mudarTela("lista")}/>
        </Container>
    )
}