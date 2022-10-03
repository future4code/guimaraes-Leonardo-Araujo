
import { app } from "./app";
import { pokemonRouter } from "./routes/pokemonRouter";
import { userRouter } from "./routes/userRouter";

app.use("/user", userRouter);
app.use("/pokemon", pokemonRouter);