import React from "react";
import {Container} from "./styled"

const Main =(props)=>{

    return(
        <Container>
        <h1>{props.renderNumber()}</h1>
        </Container>
    )

}
export default Main;