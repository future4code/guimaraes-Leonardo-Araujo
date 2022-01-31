import React from 'react';
import FotoPerfil from "./img/perfil.jpeg";
import FotoEmpresa from "./img/saint.jfif";
import FotoEmpresa2 from "./img/solistica.jfif";
import Email from "./img/email.png";
import endereco from "./img/endereco.png";
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Leonardo Santos de Araujo" 
          descricao="Oi, eu sou o Leonardo. Sou estudante na Labenu. Me formei em 2021 no curso de Tecnologia em Análise e Nove de Julho"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno imagem={Email} label={"E-mail:"} texto={"leo@gmail.com"}/>
      <CardPequeno imagem={endereco} label={"endereço:"} texto={"Rua quinza de Maio"}/>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={FotoEmpresa}
          nome="Saint Gobain" 
          descricao="Atualmento trabalho como assistente de logistica no CD de Guarulhos da Telhanorte " 
        />
        
        <CardGrande 
          imagem={FotoEmpresa2} 
          nome="Solistica" 
          descricao="Conferente de mercadorias." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
