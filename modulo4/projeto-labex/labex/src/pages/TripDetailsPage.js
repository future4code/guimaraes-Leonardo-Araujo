import axios from "axios";
import react, { useEffect } from "react";
import { useNavigate ,useParams} from "react-router-dom";

export default ()=>{
    const navigate=useNavigate()
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

    },[])

    const getTrip=()=>{

        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/trip/${param}`

        axios.get(url,{headers:{
            auth: token
            }}).then((response)=>{
                console.log(response.data.trip)
            }).catch((error)=>{
                alert(error.response.data.message)
            })
            console.log(param.id)
    }

    return(
        <>
        
        <h2></h2>
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