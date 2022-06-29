import app from './app'
import { getAllUsers } from './endpoints/getAllUsers'
import { getAllUserstype } from './endpoints/getAllUsers2'
import {getAllUsersOrdenado} from './endpoints/getAllUsersOrdenado'



app.get("/users",getAllUsers)
app.get("/users3",getAllUsersOrdenado)
app.get("/users/:type",getAllUserstype)

