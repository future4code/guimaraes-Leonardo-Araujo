import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [{nomeUsuario:"Marcos",fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},{nomeUsuario:'Leonardo',fotoUsuario:'https://picsum.photos/id/50/50',fotoPost:'https://picsum.photos/id/200/150'},{nomeUsuario:'Mari',fotoUsuario:'https://picsum.photos/id/1084/536/354?grayscale/50/50',fotoPost:'https://picsum.photos/seed/picsum/200/150'}],
    userName:"",
    userpost:"",
    userphoto:""
    
  }; 
  
  render() {
    return (
      
      <MainContainer>
        {this.state.posts.map((item)=>{
            return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost}/>
        })}
        <input value={this.state.userName} placeholder='Nome'  />
        <input  value={this.state.userphoto} placeholder='url da foto'/>
        <input value={this.state.userpost} placeholder='digite post'/>
        <button>postar </button>
      </MainContainer>
    );
  }
}

export default App;
