import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import './App.css';

import Button from '@material-ui/core/Button';

import Header from './components/Header';
import ListaMaches from './pages.js/ListaMaches';
import TelaInicial from './pages.js/TelaInicial';

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
  
  const [tela,setTela]=useState("inicial")

  useEffect(()=>{
    if(tela=="inicial"){
      document.getElementById("botao-voltar").style.display="none"
      setTela("inicial")
    }
  },[])
 
 const clearMaches=()=>{
  axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Leonardo-Santos-guimaraes/clear').then(()=>{
    alert("listas de Maches  limpa !")
  }).catch((error)=>{
      alert(error.response.data)
  })
  
  
 }
 
 const escolheTela=()=>{
   switch(tela){
     case"inicial":
     return <TelaInicial />

     case"lista":
     return  <ListaMaches/>
   }

 }

  return (
    <Container >
      <Header setTela={setTela} tela={tela}/>
      
      {escolheTela()}

      <Button variant="contained" color="primary" onClick={clearMaches}>
      Limpar Matches
      </Button>
       
    </Container>
  );
}

export default App;
