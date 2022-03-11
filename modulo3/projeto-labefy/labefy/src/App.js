
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header.jsx';

import React  from 'react';
import styled  from 'styled-components';
import MainMusicas from './components/MainMusicas';

const ContainerMain=styled.main`
display: flex;
min-height: 100vh;

`
export default class App extends React.Component {
  render(){

    return (
     <>
       <Header />
       <ContainerMain>
         
          <MainMusicas />
       </ContainerMain>
       <Footer/>
     </>
    );

  }
}


