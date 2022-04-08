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
    
    return(
        <>
        <h2>Criar viagem</h2>
        <form onSubmitCapture="">
        <input placeholder="nome "required/>
        <input placeholder="escolha planeta" required/>
        <input placeholder="data" type="date" required/>
        <input placeholder="descrição" required/>
        <input placeholder="duração em dias" required/>
        <button onClick={goToBack}> Voltar</button>
        <button> criar </button>
        </form>
        </>
    )
}