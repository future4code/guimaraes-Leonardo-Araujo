import axios from "axios";
import { app } from "./app";
import dotenv from 'dotenv'
dotenv.config()


import { userRouter } from "./routes/userRouter";



app.use("/user", userRouter);



