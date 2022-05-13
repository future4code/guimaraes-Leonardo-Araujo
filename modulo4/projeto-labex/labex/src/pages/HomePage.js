
import react from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";


const Container=styledComponents.div`
    
    width:80vw;
    display:flex;
    flex-direction:column;
    
    justify-contents:center;
    
    
`
const Tela=styledComponents.div`
display: flex;

justify-content:center;
align-items: center;

`
export default ()=>{
const navigate=useNavigate()
const goToListTrips=()=>{
    navigate('/ListTrips')
}
const goToLogin=()=>{
    navigate('/login')
}
    return(
        <Tela>
            <Container>
        <h1>Labex</h1>
        <div>
        <button onClick={goToListTrips}> Ver viagens</button>
        <button onClick={goToLogin}>Área de Admin</button>
        </div>
        </Container>
            
            
        </Tela>
        
    )
}