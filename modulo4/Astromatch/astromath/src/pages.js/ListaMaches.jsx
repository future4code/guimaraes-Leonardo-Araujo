import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'


const Container=styled.div`
display: flex;
justify-items: center;
flex-direction: column;

p{
    
    display: flex;
   align-items: center;
}
img{
    height: 50px;
    width: 50px;
    border-radius:50%;
    margin: 10px 10px;
    
}
`
export default (props)=>{
    const [listaMaches,setListaMaches]=useState()
    useEffect(()=>{
        getMaches()
      },[])

    const getMaches=()=>{
     axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Leonardo-Santos-guimaraes/matches").then((response)=>{
            console.log(response.data.matches)
            setListaMaches(response.data.matches)
     }).catch((erro)=>{
        alert(erro.response)
     })
     
    }  
    const renderLista=()=>{
        
        if(listaMaches){
          const matches = listaMaches.map((mach, index)=>{
                return(
                   <p key={index}><img src={mach.photo}/>{mach.name}</p>
                    
                )
            }
            )
            return matches 
        }
    }
    return(
        <Container>
            
        {renderLista()}
        
        </Container>
    )

}