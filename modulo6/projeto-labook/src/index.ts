import {app} from "./app"
import { friendshipsRouter } from "./routes/friendshipsRoutes"
import { postRouter } from "./routes/PostRoute"
import { userRouter } from "./routes/UserRouter"



app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/friendships", friendshipsRouter)



