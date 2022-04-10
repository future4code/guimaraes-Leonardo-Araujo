import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";


const ContainerDescricao=styledComponents.div`
    margin: 10px;
    padding: 50px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;    
   border:1px solid grey;
   background-color: #c4ddd6 ;
   
    
`
export default ()=>{
    
    const navigate=useNavigate()
    const [viagens,setViagens]=useState([])
    useEffect(()=>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trips"
        axios.get(url).then((response)=>{
                setViagens(response.data.trips)
        }).catch((error)=>{
            alert(error.response.data.message)
        })
    },[])
    const goToHome=()=>{
        navigate(-1)
    }
    const goToAppForm=()=>{
        navigate('/appform')
    }
    const mostrarDetalhesViagem=()=>{
        if(viagens){
            const trips=viagens.map((viagem,i)=>{
                    return <ContainerDescricao key={i}>
                        <p><strong>Nome: </strong>{viagem.name}</p>
                        <p><strong>Descrição: </strong>{viagem.description}</p>
                        <p><strong>Planeta: </strong>{viagem.planet}</p>
                        <p><strong>Duração: </strong>{viagem.durationInDays}</p>
                         <p> <strong>Data: </strong>{viagem.date}</p>
                    </ContainerDescricao>
            })

            return trips
        }
    }
        
    return(
        <>
        <button onClick={goToHome}>Voltar</button>
        <button onClick={goToAppForm}>Inscrever-se</button>
        <h2>Lista de viagens</h2>
        
        {mostrarDetalhesViagem()}
        </>
    )
}