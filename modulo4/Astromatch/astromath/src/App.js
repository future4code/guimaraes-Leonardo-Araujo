import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import './App.css';
import CardPerfil from './components/CardPerfil';
import coracao from './img/coracao.png'
import x from './img/x.png'
import Header from './components/Header';

const Container=styled.div`
width: 400px;
height: 90vh;
border: 1px solid black;
div{
  display: flex;
justify-content: space-around;

img.like{
    height: 50px;
}
}
button{
  position: absolute;
  right: 0;
  top:50%;
  margin-right: 30px;
}
`


function App(props) {
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
 const clearMaches=()=>{
  axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Leonardo-Santos-guimaraes/clear').then(()=>{
    alert("listas de Maches  limpa !")
  }).catch((error)=>{
      alert(error.response.data)
  })
 }
  return (
    <Container >
      <Header/>
        <CardPerfil usuario={usuario}/>
        <div>
        <img src={x} className="like" onClick={()=>choosePerson(usuario.id,false)}
/>
        <img src={coracao} className="like" onClick={()=>choosePerson(usuario.id,true)}
/>   
        </div>  
        <button  value=" Limpar Maches" onClick={clearMaches}>Limpar Maches</button>   
    </Container>
  );
}

export default App;
