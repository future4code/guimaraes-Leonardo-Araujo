import app from './app'
import { createProduct } from './endpoints/createProduct'
import { createUser } from './endpoints/createUser'
import { getAllproducts } from './endpoints/getAllProducts'
import { getAllUsers } from './endpoints/getAllUsers'




app.post("/users",createUser)
app.get("/users",getAllUsers)
app.get("/products",getAllproducts)
app.post("/products",createProduct) 

