import app from './app'
import { createProduct } from './endpoints/createProduct'
import { createUser } from './endpoints/createUser'
import { getAllproducts } from './endpoints/getAllProducts'
import { getAllUsers } from './endpoints/getAllUsers'
import { getPurchaseUser } from './endpoints/getPurchaseUser'
import { purchaseRecord } from './endpoints/purchaseRecord'





app.post("/users",createUser)
app.get("/users",getAllUsers)
app.get("/products",getAllproducts)
app.post("/products",createProduct)
app.post("/purchases", purchaseRecord)
app.get("/users/:user_id/purchases",getPurchaseUser)

