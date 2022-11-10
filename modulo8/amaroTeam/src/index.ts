import axios from "axios";
import { app } from "./app";
import dotenv from 'dotenv'
dotenv.config()


import { userRouter } from "./routes/userRouter";
import { productRouter } from "./routes/ProductRoute";



app.use("/user", userRouter);
app.use("/product", productRouter);



