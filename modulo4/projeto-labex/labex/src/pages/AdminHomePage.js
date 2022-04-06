
import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
const Card=styledComponents.div`
display: flex;
justify-content:space-between;
background-color: red;
padding: 20px;
margin: 10px;
border: 2px solid blue;
`
export default ()=>{
    const navigate=useNavigate()
    const token= localStorage.getItem("token")
    const [viagens,setViagens]=useState([])
    useEffect(()=>{

        if(token===null){
            navigate('/login')
        }
    },[])
    useEffect(()=>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trips"
        axios.get(url, {headers:{
            auth: token}
        }).then((response)=>{
                setViagens(response.data.trips)
        }).catch((error)=>{
            alert(error.response.data.message)
        })
    },[])



    const goToBack=()=>{
        navigate(-1)
    }
    const goToLogin=()=>{
        navigate('/login')
    }
    const goTocreatTrips=()=>{
        navigate('/createtrip')
    }
    return(
        <>
        <h2>Painel administrativo</h2>
        <button onClick={goToBack}>voltar</button>
        <button onClick={goTocreatTrips}>Criar viagem</button>
        <button onClick={goToLogin}>Logout</button>
        {viagens.map((viagem,i)=>{
                return(
                    <Card key={i}>
                        <h2>{viagem.name}</h2>
                        <span>X</span>
                    </Card>
                )
        })}
        </>
    )
}