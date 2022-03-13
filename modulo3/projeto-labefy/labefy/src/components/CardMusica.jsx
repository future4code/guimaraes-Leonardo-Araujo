import React from "react";
import styled from "styled-components";
import axios  from "axios";



const Container=styled.div`
border: 3px solid green;
 display: grid;
 grid-template-columns:1fr 30px;
max-width:400px ;
 
 background-color: #f54263;
 justify-items: center;
 align-items: center;
 
 img{
     height: 60px;
     
 }
 div{
     text-align: center;
  
 }
 span{
     
     color:orange;
     border: 1px solid black ;
     padding:10px ;
     cursor :pointer;
         
 }
 span:hover{
    background-color: #b1485b;
 }
 div.musicas{
     display:flex ;
     flex-direction: column ;
     width:100% ;
     color:white ;
     text-align:start ;
     padding:20px ;
     
     button{
        background-color: #25e4bc;
        margin-bottom: 30px;
        border: none;
        border-radius: 20px;
        cursor:pointer;

     }
     p{
         background-color: #b1485b;
         margin-bottom:10px ;
         padding:10px ;
         
     }
     p:hover{
        background-color: #39c52d;
        cursor:pointer ;
     }

 }
 
`
const ContainerAddMusica=styled.div`
display: none;
flex-direction: column;

input{
    margin-bottom: 10px;
}
`



export default class CardMusica extends React.Component{
    state={
        musicas:[],
        newMusicNome:"",
        newMusicArtista:"",
        newMusicUrl:""
    }
    componentDidMount(){
        this.getPlaylistTracks(this.props.id)
    }
    getPlaylistTracks=(id)=>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const headers={
            headers:{
            Authorization: "Leonardo-Santos-guimaraes"
        }}
       axios.get(url,headers).then((res)=>{
            this.setState({musicas:res.data.result.tracks})
            
        }).catch((error)=>{
            console.log(error.response.data.message)
        })


    }
    deletePlaylist=(id)=>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const headers={
            headers:{
            Authorization: "Leonardo-Santos-guimaraes"
        }}
        axios.delete(url,headers).then((response)=>{
                    alert("playlist apagada com sucesso !")
        }).catch((error)=>{
            console.log(error.response.data.message)
        })
        this.props.atualizarPlaylist(id)
    }
    mostrarDetalhes=(name)=>{

        
        const musicas= document.querySelectorAll(`.${name}`)
        
        musicas.forEach((musica)=>{
            
            musica.classList.toggle('ocultar-musica')
           
        })
    }
    mostrarAddMusica=(name)=>{
        const formulario=document.getElementById(name)
        if(formulario.style.display=="flex"){
            formulario.style.display="none"
        }else{
            formulario.style.display="flex"

        }
    }
    handleMusicas=()=>{
        const nomeClasse=this.props.name
       if(this.state.musicas.length!==0){
           const musicas= this.state.musicas.map((music)=>{
               
               return <div className={`${nomeClasse} ocultar-musica`} key={music.id}>
                 
                   <p  >
                   
                  <strong>Musica:</strong> {music.name} - <strong>artista:</strong> {music.artist}</p>
               </div>
               })
              
               if(musicas.length!==undefined){
                   return musicas
               }else{
                
               }
           
           
       }else{
        return <div className={`${nomeClasse} ocultar-musica`}>
            <h3>Sem musicas</h3>
        </div>
       }

    }
    addTrackToPlaylist=(id,nome,artista,urlMusic)=>{
        
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const headers={
            headers:{
            Authorization: "Leonardo-Santos-guimaraes"
        }}
        const body={
            "name":nome, 
            "artist": artista,
            "url": urlMusic
        }
        axios.post(url,body,headers).then((res)=>{
            alert("Musica adicionada !")
            this.setState({newMusicNome : '' })
            this.setState({newMusicArtista : ""})
            this.setState({newMusicUrl : ""})
            
            this.atualizarMusicas(id)

        }).catch((error)=>{
            console.log(error.response.data.message)

        })


    }
    handleNeuMusicNome=(event)=>{
        
        this.setState({newMusicNome : event.target.value})
        
        console.log(this.state.newMusicNome)
        
    }
    handleNeuMusicArtista=(event)=>{
        this.setState({newMusicArtista : event.target.value})
        console.log(this.state.newMusicArtista)
        
    }
    handleNeuMusicUrl=(event)=>{
        this.setState({newMusicUrl : event.target.value})
        console.log(this.state.newMusicUrl)
       
    }
    atualizarMusicas=(id)=>{
        this.getPlaylistTracks(id)
        this.mostrarDetalhes(this.props.name)
    }
    render(){
        
        return(
                
            <Container>
                <div>
                
                <img src={this.props.img} alt="musicas"/>
                <h2>{this.props.name}</h2>
                </div>
                
                
               
               <span onClick={()=>{
                   this.deletePlaylist(this.props.id)
               }}>X</span>
                 <div className="musicas" >
                   <button onClick={()=>this.mostrarAddMusica(this.props.name)}>Icluir musíca</button>
               <ContainerAddMusica id={this.props.name}>

                   
                   <input  placeholder="nome" onChange={this.handleNeuMusicNome} value={this.state.newMusicNome}/>
                   <input  placeholder="artista" onChange={this.handleNeuMusicArtista} value={this.state.newMusicArtista}/>
                   <input  placeholder="URL" onChange={this.handleNeuMusicUrl} value={this.state.newMusicUrl}/>
                   <button onClick={()=>this.addTrackToPlaylist(this.props.id,this.state.newMusicNome,this.state.newMusicArtista,this.state.newMusicUrl)}>Adicionar musíca</button>
               </ContainerAddMusica>
            
                 <button  onClick={()=>this.mostrarDetalhes(this.props.name)}>Detalhes </button>
                
                 
                {this.handleMusicas()}
                   
                </div>
               
               
            </Container>

        );
    }
}