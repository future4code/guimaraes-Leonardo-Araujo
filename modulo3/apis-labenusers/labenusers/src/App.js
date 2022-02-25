import Users from './paginas/Users';
import './App.css';
import Page1 from './paginas/Page1';
import styled  from 'styled-components';
import  React  from 'react';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  background-color: bisque;
  button:hover{
    background-color: yellowgreen;
  }
`
const BotaoMudarTela=styled.button`
  height: 40px;
  width: 20vw;
  margin: 20px 0;
  background-color: aquamarine;
  border: none;
  box-shadow: 1px 4px black;
  cursor: pointer;
`
class App extends React.Component {

  state={
    paginaAtual:"Page1"
  }
  onChangePage=()=>{
    if (this.state.paginaAtual === "Page1") {
      this.setState({ paginaAtual: "Users" });
    } else {
      this.setState({ paginaAtual: "Page1" });
    }
  }
  render(){
    
  return (
    <Container>
    <BotaoMudarTela onClick={this.onChangePage}>Trocar de  tela</BotaoMudarTela>
    {this.state.paginaAtual === "Page1" ? <Page1 /> : <Users />}
    </Container>
  );
  }
}

export default App;
