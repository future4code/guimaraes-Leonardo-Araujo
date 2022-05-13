import axios from "axios";
import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
const Container=styledComponents.div`
display: flex;
flex-direction:column;
border: 1px solid red;
height:100vh;
align-items:center;
justify-content:center;
background-color:#c4ddd6;
form{
    
    display:flex;
    flex-direction:column;
    input,select,button{
        width:80vw;
        height:40px;
    }
}
`

export default ()=>{
    const navigate=useNavigate()
    const [idViagem,setIdViagem]=useState("")
    const goToBack=()=>{
        navigate(-1)
    }
    const enviarFormulario=(e)=>{
        e.preventDefault();
        let planeta=e.target[0].value
        let nome=e.target[1].value
        let idade=e.target[2].value
        let descricao=e.target[3].value
        let profissao=e.target[4].value
        let pais=e.target[5].value
        let viagens=[]
        
        
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trips"
        axios.get(url).then((response)=>{
                viagens=response.data.trips
                
               const trip=viagens.filter((viagem)=>{
                    
                    if(viagem.planet===planeta){
                        return viagem.id

                    }

                })
                setIdViagem(trip[0].id)

        }).catch((error)=>{
            alert(error.response)
        })
        
            axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trips/${idViagem}/apply`, {
                "name": nome,
                "age": idade,
                "applicationText": descricao,
                "profession": profissao,
                "country": pais
            }
               
            ).then((response)=>{
                console.log(response.data.message)
            }).catch(error=>{
                console.log(error.response)
            })


    

    }
    
    return(
        <Container>
        <h2> Inscreva-se para uma viagem</h2>
        <form onSubmit={enviarFormulario}>
        <select placeholder="escolha uma viagem" name="planeta">
            <option value="Marte"> Marte</option>
            <option value="Jupiter"> Jupiter</option>
            <option value="Plutão"> Plutão</option>
            <option value="Netuno"> Netuno</option>
        </select>
        <input placeholder="nome" required name="nome"/>
        <input placeholder="idade"required type="number" min="18" name="idade"/>
        <input placeholder="texto de candidatura" required name="testo"/>
        <input  placeholder="profissão"required name="profissao"/>
        <select placeholder="escolha país required" name="pais">
            <option value="Brasil"> Brasil</option>
            <option value="Canada"> Canada</option>
            <option value="EUA"> EUA</option>
        </select>
        <button onClick={goToBack}> Voltar</button>
        <button type='submit'> Enviar </button>
        </form>
        </Container>
    )
}