import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default ()=>{
    const navigate=useNavigate()
    const token= localStorage.getItem("token")
    useEffect(()=>{
        

        if(token===null){
            navigate('/login')
        }
    },[])
    useEffect(()=>{

    },[])

    return(
        <>
        <h2>Ernandes Freitas Bitencourt</h2>
        <p>loren15</p>
        <button> Voltar</button>
        <h2>Candidatos pendentes</h2>
        <p>loren15</p>
        <button>Aprovar</button>
        <button> Reprovar</button>
        <h2>Candidatos aprovados</h2>
        </>
    )
}