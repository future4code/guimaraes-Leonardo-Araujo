import axios from "axios";
import { app } from "./app";
import dotenv from 'dotenv'
dotenv.config()


import { userRouter } from "./routes/userRouter";
import { passeioRouter } from "./routes/passeioRouter";


app.use("/user", userRouter);
app.use("/passeio",passeioRouter )


// axios.get(process.env.URL_GEOLOCATION+"").then((res)=>{
//     console.log(res.data.latitude)
// })