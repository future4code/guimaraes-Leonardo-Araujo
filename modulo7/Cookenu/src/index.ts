import app from "./controller/app"
import { RecipesRouter } from "./controller/RecipesRouter"
import { userRouter } from "./controller/userRouter"


app.use('/user/', userRouter)
app.use("/recipe",RecipesRouter)
