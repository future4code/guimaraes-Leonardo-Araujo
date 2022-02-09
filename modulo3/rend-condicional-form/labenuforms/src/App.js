import './App.css';
import styled from 'styled-components';
import DadosGerais from './pages/DadosGerais';
import EnsinoSuperior from './pages/EnsinoSuperior';
import InformacoesCursoSuperior from './pages/InformacoesCursoSuperior';
import Agradecimento from './pages/Agradecimento';
const Container=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    input, select{
        margin:10px;
        width:40vw;
        text-align: center;
    }
    button{
        padding: 10px;
        margin-top:20px ;
    }
`
function App() {
  return (
    <Container>
      <DadosGerais/>
      <EnsinoSuperior/>
      <InformacoesCursoSuperior/>
      <Agradecimento/>
    </Container>
  );
}

export default App;
