import React from "react";
import styled from "styled-components";
import CardMusica from "./CardMusica";
import musicas from "../img/musicas.png"
import CriarPlaylist from "./CriarPlaylist";
import home from "../img/home.png"
import playlist from "../img/playlist.png"
import newPlaylist from "../img/adicionarPlaylist.png"
import axios  from 'axios';


const Containe=styled.div`
display:flex ;
`
const Container=styled.aside`
 display: flex;
 flex-direction: column;
 background-color: #591e4a;
 justify-content: start;
 align-items: center;
 width: 20vw;
 min-width: 200px;
 div{
     display: flex;
     width: 80%;
     color: white;
     padding: 5px;
     background-color: #460736;
     text-transform: uppercase;
     justify-content:start;
     align-items: center;
     margin: 15px;
 }
 img{
     height: 40px;
     margin: 0 20px;
     border-radius: 10px;
     background-color: bisque;
     cursor: pointer;
 }
 div:hover{
    cursor: pointer;
    background-color: #9c1285;
 }
`
const ContainerMusicas=styled.main`
 display: grid;
padding: 5px;

 grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
 background-color: #591e4a;
 justify-content: start;
 align-items: start;
 width: 80vw;
 gap: 10px;
 
`



export default class MainMusicas extends React.Component{
state={
    pagina:"playlists",
    playlists:[]
}
escolherTela=()=>{
    switch (this.state.pagina){
        case "criar lista":
            return  <CriarPlaylist/>
        case "playlists" :
            return (
                this.state.playlists.map((playlist)=>{
                    return <CardMusica key={playlist.id} img={musicas} name={playlist.name} id={playlist.id}  atualizarPlaylist={this.atualizarPlaylist}/>
                      
                    

                })
            ) 
            default:
               return <p>houve um erro</p> 
    
    }
}
atualizarPlaylist=(id)=>{
    const newList=this.state.playlists.filter((playlist)=>{
        return playlist.id !==id

    })
    this.setState({playlists:newList})
    

}
onClickNewPlaylist=()=>{
    this.setState({pagina:"criar lista"})
}
onClickPlaylist=()=>{
    this.setState({pagina:"playlists"})
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const headers={
        headers:{
        Authorization: "Leonardo-Santos-guimaraes"
    }}
    axios.get(url,headers).then((response)=>{
            this.setState({playlists: response.data.result.list })
    }).catch((error)=>{
        alert(error.response.data.message)
    })
}
    render(){
        return(
            <Containe>
            <Container>
                <div>
                    <img src={home}alt="home"/>
                    <p>Início</p>
                </div>
                <div onClick={this.onClickPlaylist}>
                    <img src={playlist} alt="playlist"/>
                    <p>Minhas playlists</p>
                </div>
                <div onClick={this.onClickNewPlaylist}>
                    <img src={newPlaylist} alt="newPlaylist"/>
                    <p>Criar playlist</p>
                </div>
                
               
               
            </Container>
            
            <ContainerMusicas>
                {this.escolherTela()}
              
            </ContainerMusicas>
            </Containe>


        );
    }
}