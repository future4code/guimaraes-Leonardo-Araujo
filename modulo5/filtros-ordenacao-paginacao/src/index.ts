import app from './app'
import { getAllUsers } from './endpoints/getAllUsers'
import { getAllUsers4 } from './endpoints/getAllUsers04'
import { getAllUserstype } from './endpoints/getAllUsers2'
import { getAllUsers3 } from './endpoints/getAllUsers3'
import {getAllUsersOrdenado} from './endpoints/getAllUsersOrdenado'



app.get("/users",getAllUsers)
app.get("/users3",getAllUsersOrdenado)
app.get("/users4",getAllUsers3)
app.get("/users5", getAllUsers4)
app.get("/users/:type",getAllUserstype)

