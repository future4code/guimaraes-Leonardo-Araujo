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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Leonardo'}
          fotoUsuario={'https://picsum.photos/id/50/50'}
          fotoPost={'https://picsum.photos/id/200/150'}
        />
        <Post
          nomeUsuario={'Mari'}
          fotoUsuario={'https://picsum.photos/id/1084/536/354?grayscale/50/50'}
          fotoPost={'https://picsum.photos/seed/picsum/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
