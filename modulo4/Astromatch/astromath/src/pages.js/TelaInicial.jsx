import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import CardPerfil from '../components/CardPerfil'
import coracao from '../img/coracao.png'
import x from '../img/x.png'

const Container=styled.div`

display: flex;
flex-direction: column;
div{
  display: flex;
justify-content: space-around;
min-height: 520px;

img.like{
    height: 50px;
    cursor: pointer;
    background-color: #16d6dd;
    border-radius: 50%;
    
    

}
img.like:hover{
  background-color: #bfdd16;
   transform:scale(1.2);
}
}
`
 export default (props)=>{
    const [usuario,setUsuario]=useState({})

    useEffect(()=>{
        getProfileToChoose()
      },[])
     const getProfileToChoose=()=>{
       axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Leonardo-Santos-guimaraes/person"
       ).then((response)=>{
          setUsuario(response.data.profile)
        
       }).catch((error)=>{
         alert(error.response)
    
       })
       
     }
    const choosePerson=(id,choice)=>{
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Leonardo-Santos-guimaraes/choose-person', {
              id,
              choice
          }).then(()=>{
            
        }).catch((error)=>{
          alert(error.response)
        })
        getProfileToChoose()
       }

    return(
        <Container>
            <CardPerfil usuario={usuario}/>
        <div id="card-perfil">
        <img src={x} className="like" onClick={()=>choosePerson(usuario.id,false)}
/>
        <img src={coracao} className="like" onClick={()=>choosePerson(usuario.id,true)}
/>   
        </div>  
        
        </Container>

    )
}