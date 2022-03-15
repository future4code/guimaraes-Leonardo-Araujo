import axios from "axios";
import React from "react";
import styled  from 'styled-components';

const Container=styled.div`
background-color: #f54263;
min-height:400px ;
width:300px;
display:flex ;
flex-direction:column ;
padding:20px ;
h2{
    color: white ;
    margin:30px ;
}
input{
    height:40px ;
    text-align:center;
    font-size:15pt ;
}
button:hover{
    background-color: #9c1285;
    transform: scale(1.1);
    cursor: pointer;
}
button{
    height:40px ;
    text-align:center;
    border-radius:10px ;
    border:none ;
    font-size:15pt ;
}
input,button{
    margin: 20px;   
}

`
export default class CriarPlaylist extends React.Component{
    state={
        playlist:'',
       
    }
    handlePlaylist=(even)=>{
        this.setState({playlist: even.target.value})
        

    }
    createPlaylist=()=>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body={
            name: this.state.playlist
        }
        const headers={
            headers:{
            Authorization: "Leonardo-Santos-guimaraes"
        }}
        axios.post(url,body,headers).then((response)=>{
            alert("Playlist Criada com sucesso")
            this.setState({playlist: ""})

        }).catch((error)=>{
            alert(error.response.data.message)
        })
    }
    render(){
        return(

            <Container>
                <h2>Criar uma Playlist</h2>
                <input onChange={this.handlePlaylist} value={this.state.playlist}/>

                <button onClick={this.createPlaylist}>Criar playlist</button>

                
                
               
               
            </Container>

        );
    }
}