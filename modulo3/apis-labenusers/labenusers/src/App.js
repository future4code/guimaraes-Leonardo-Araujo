import Users from './paginas/Users';
import './App.css';
import Page1 from './paginas/Page1';
import styled  from 'styled-components';
import  React  from 'react';

const Container=styled.div`
  display: flex;
  flex-direction: column;
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
    <button onClick={this.onChangePage}>Trocar de  tela</button>
    {this.state.paginaAtual === "Page1" ? <Page1 /> : <Users />}
    </Container>
  );
  }
}

export default App;
