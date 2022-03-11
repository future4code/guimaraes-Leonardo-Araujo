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
     
     h3{
         margin:10px;
         text-align:center ;
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




export default class CardMusica extends React.Component{
    state={
        musicas:[]
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
   
    render(){
        return(
                
            <Container>
                <div>
                
                <img src={this.props.img}/>
                <h2>{this.props.name}</h2>
                </div>
                
                
               
               <span onClick={()=>{
                   this.deletePlaylist(this.props.id)
               }}>X</span>
                 <div className="musicas" >
               
                
                <h3>Músicas</h3>
                {this.state.musicas.map((music)=>{
                    return <p key={music.id} >
                       <strong>Musica:</strong> {music.name} - <strong>artista:</strong> {music.artist}</p>
                    })}
                
                </div>
               
               
            </Container>

        );
    }
}