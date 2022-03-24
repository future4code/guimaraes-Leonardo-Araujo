import styled from 'styled-components'
import './App.css';
import CardPerfil from './components/CardPerfil';
import Footer from './components/Footer';
import Header from './components/Header';

const Container=styled.div`
width: 500px;
height: 90vh;
border: 1px solid black;
`

function App() {
  return (
    <Container >
      <Header/>
        <CardPerfil/>
      
      <Footer/>
    </Container>
  );
}

export default App;
