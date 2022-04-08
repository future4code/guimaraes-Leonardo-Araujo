import react from "react";
import { useNavigate } from "react-router-dom";
export default ()=>{
    const navigate=useNavigate()
    const goToBack=()=>{
        navigate(-1)
    }
    
    return(
        <>
        <h2> Inscreva-se para uma viagem</h2>
        <form onSubmit="">
        <select placeholder="escolha uma viagem">
            <option> Marte</option>
        </select>
        <input placeholder="nome" required/>
        <input placeholder="idade"required type="number" />
        <input placeholder="texto de candidatura" required/>
        <input  placeholder="profissão"required/>
        <select placeholder="escolha país required">
            <option> Brasil</option>
        </select>
        <button onClick={goToBack}> Voltar</button>
        <button> Enviar </button>
        </form>
        </>
    )
}