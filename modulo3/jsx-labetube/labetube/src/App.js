import './App.css';
import home from"./img/iconehome.png"
import explorar from"./img/explorar.png"
import incricoes from"./img/inscricoes.png"
import original from"./img/original.png"
import historico from"./img/historico.png"

function App() {
  const titulo = "Título do vídeo"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  return (
    <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <div>
              <input type="text" placeholder="Busca" id="campoDeBusca"/>
              <img id="pesquisa" src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png" alt="pesquisa" />
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <img src={home} alt=" home"/>
                    <li className="botoes-meunu-vertical">Início</li>
                    <img src={explorar} alt=" home"/>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <img src={incricoes} alt=" home"/>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/><hr/>
                    <img src={original} alt=" home"/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <img src={historico} alt=" home"/>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
  );
}

export default App;
