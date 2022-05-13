
import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";


const Card=styledComponents.div`
display: flex;
justify-content:space-between;
align-items:center;
background-color: #d4ddd6;

margin: 10px;
border: 2px solid blue;

span{
    padding:20px
    heigth:20%;
    width: 20px;
    background-color:red;
    color:white;
    cursor:pointer;
    float:right;
}
h2{
    
    width:98%;
}
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
    const goToDetailPage=(id)=>{
        
        navigate(`/tripdetail/${id}`)
    }
    const deleteTrip=(viagemId)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trips/${viagemId}`,{
            headers:{
                auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikxtd3ZhVnJXM2lzS09hZmFKeXJhIiwiZW1haWwiOiJsZW9zYW50b3NkZWFyYXVqb0BnbWFpbC5jb20iLCJpYXQiOjE2NDk2MzMxOTF9.Q8kHc2eWUqicPbMkV1iTyFJfORP0gPCQhhOZCA8Oz7o"
            }
        }).then((response)=>{
           
            alert("viagem deletada com sucesso")
            navigate("/")
            navigate("/admhome")
            
        }).catch((error)=>{
            console.log(error.response)
        })

    }
    return(
        <>
        <h2>Painel administrativo</h2>
        <button onClick={goToBack}>voltar</button>
        <button onClick={goTocreatTrips}>Criar viagem</button>
        <button onClick={goToLogin}>Logout</button>
        {viagens.map((viagem,i)=>{
                return(
                    <Card key={i} >
                        <h2 onClick={()=>{goToDetailPage(viagem.id)}}>{viagem.planet}</h2>
                        <span onClick={()=>deleteTrip(viagem.id)}>X</span>
                    </Card>
                )
        })}
        </>
    )
}