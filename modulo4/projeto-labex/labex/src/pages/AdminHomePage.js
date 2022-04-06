import axios from "axios";
import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default ()=>{
    const navigate=useNavigate()

    useEffect(()=>{
        const token= localStorage.getItem("token")

        if(token===null){
            navigate('/login')
        }
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
        
        </>
    )
}