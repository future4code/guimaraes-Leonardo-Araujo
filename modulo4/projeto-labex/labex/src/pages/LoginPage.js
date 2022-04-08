import axios from "axios";
import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default ()=>{
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')

    const navigate=useNavigate()
    const goToBack=()=>{
        navigate('/')
    }
    const goToAdmHome=()=>{
        navigate('/admhome')
    }

    const handleEmail=(event)=>{
        setEmail(event.target.value)
        
    }
    const handleSenha=(event)=>{
        setSenha(event.target.value)
        
    }
    const login=()=>{
        
        const body={
            "email": email,
            "password": senha
        }
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/login"
        axios.post(url,body).then((response)=>{
            
            localStorage.setItem("token",response.data.token)
            goToAdmHome()
        }).catch((error)=>{
            console.log(error.response.data.message)
        })
    }
    const handleClick=(e)=>{
        e.preventDefaut()
    }
    return(
        <>
        <h2> Login</h2>
        <form onSubmit={handleClick}>
        <input name="email" type='email' placeholder="E-mail" value={email} onChange={handleEmail} required/>
        <input name="senha" placeholder="senha" type="password" value={senha} onChange={handleSenha}  required/>
        <button onClick={goToBack}> Voltar</button>
        <button onClick={login}> Entrar </button>
        </form>
        
        </>
    )
}