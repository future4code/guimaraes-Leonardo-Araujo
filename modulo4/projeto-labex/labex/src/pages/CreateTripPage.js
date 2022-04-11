import axios from "axios";
import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";

const Container=styledComponents.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    form{

        display:flex;
        flex-direction:column;

        input,button{
            height:30px;
            width:80vw;
        }

    }

`
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
    const onSubimitForm=(e)=>{
        e.preventDefault();
        let nome=e.target[1].value
        let planeta=e.target[0].value
        let data=e.target[2].value
        let descricao=e.target[3].value
        let duracao=e.target[4].value

        const body={
            "name": nome,
            "planet": planeta,
            "date":data,
            "description": descricao,
            "durationInDays": duracao
        }

       axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trips`,body,{
           headers:{
               auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikxtd3ZhVnJXM2lzS09hZmFKeXJhIiwiZW1haWwiOiJsZW9zYW50b3NkZWFyYXVqb0BnbWFpbC5jb20iLCJpYXQiOjE2NDk2MzMxOTF9.Q8kHc2eWUqicPbMkV1iTyFJfORP0gPCQhhOZCA8Oz7o"
           }
       }).then(()=>{
           alert("viagem criada com sucesso")
       }).catch((err)=>{
           alert(err.response.data)
       })
        
     

    }
    return(
        <Container>
        <h2>Criar viagem</h2>
        <form onSubmitCapture={onSubimitForm}>
        <input placeholder="nome "required name="nome"/>
        <input placeholder="escolha planeta" required name="planeta" />
        <input placeholder="data" type="date" required name="data" />
        <input placeholder="descrição" required  name="descricao"/>
        <input placeholder="duração em dias" required  name="duracao" />
       
        <button> criar </button>
        </form>
        <button onClick={goToBack}> Voltar</button>
        </Container>
    )
}