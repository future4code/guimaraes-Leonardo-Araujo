import app from './app'
import { createProduct } from './endpoints/createProduct'
import { createUser } from './endpoints/createUser'
import { getAllUsers } from './endpoints/getAllUsers'




app.post("/users",createUser)
app.get("/users",getAllUsers)
app.post("/products",createProduct) 

