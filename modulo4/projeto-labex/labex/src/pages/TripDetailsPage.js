
import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import styledComponents from "styled-components";

const ContainerDescricao=styledComponents.div`
    width:80vw;
    padding: 50px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;    
   
    h2{
        align-self:center
    }
    
`
const ContainerCandidatos=styledComponents.div`
background-color: grey;
padding:20px;
margin:10px;
color:white;
`

export default ()=>{
    const navigate=useNavigate()
    const [trip,setTrip]=useState()
    const [candidatos,setCandidatos]=useState([])
    const [candidatosAprovaddos,setCandidatosAprovados]=useState([])
    const param=useParams()
    const token= localStorage.getItem("token")
    useEffect(()=>{
        

        if(token===null){
            navigate('/login')
        }else{
            getTrip()
        }
    },[])
    useEffect(()=>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trips"
        axios.get(url, {headers:{
            auth: token}
        }).then((response)=>{
              const viagem=  response.data.trips
              
              let trip=viagem.filter((viagem)=>{
                  return viagem.id=== param.id
              })
              setTrip(trip)
        }).catch((error)=>{
            alert(error.response.data.message)
        })
        
    },[])

    const getTrip=()=>{

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trip/${param.id}`,{headers: {auth:token}}).then((response)=>{
            setCandidatos(response.data.trip.candidates)
            setCandidatosAprovados(response.data.trip.approved)
            console.log(response.data.trip)

        }).catch(error=>{

            alert(error.response)
        })
           
    }
    const mostrarDetalhesViagem=()=>{
        if(trip){
            console.log(trip[0].id)
            return<ContainerDescricao>
                <h2>{trip[0].name}</h2>
                <p><strong>Nome: </strong>{trip[0].name}</p>
                <p><strong>Descrição: </strong>{trip[0].description}</p>
                <p><strong>Planeta: </strong>{trip[0].planet}</p>
                <p><strong>Duração: </strong>{trip[0].durationInDays}</p>
                <p> <strong>Data: </strong>{trip[0].date}</p>
                
            </ContainerDescricao>
                
            
            
        }
        
    }
    const mostrarCandidatos=()=>{
        if(candidatos){
            const candidates=candidatos.map((candidato,i)=>{
                return(
                    <ContainerCandidatos>
                        <p key={i}>{candidato.name}</p>
                         <button>Aprovar</button>
                         <button> Reprovar</button>
                    </ContainerCandidatos>
                )
            })
            return candidates
        }else{
            return <p>não há candidatos pendentes</p>
        }
        
    }
    const mostrarCandidatosAprovaados=()=>{
        if(candidatosAprovaddos){
            const candidatesAprovved=candidatosAprovaddos.map((candidato,i)=>{
                return(
                    <div>
                        <li key={i}>{candidato.name}</li>
                        
                        
                    </div>
                )
            })
            return candidatesAprovved
        }else{
            <p>Sem candidatos </p>
        }
        
    }
    const goToBack=()=>{
        navigate(-1)
    }
    
    return(
        <>
        
        {mostrarDetalhesViagem()}

        <button onClick={goToBack}> Voltar</button>
        <h2>Candidatos pendentes</h2>
        {mostrarCandidatos()}
        
        
        {mostrarCandidatosAprovaados()}
        
        </>
    )
}